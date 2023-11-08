import React, { useState } from "react";
import style from "./createtask.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Select from "react-select";
import { useSelector } from "react-redux";
import "../../App.css";
import { toast, ToastContainer } from "react-toastify";
import { convertToStringOfArray } from "../../utils/fuctions";
import { createJob } from "../../services/jobs/jobCrud";
import { useNavigate } from "react-router-dom";

// react-select styles
const customSelectStyles = {
  container: (provided) => ({
    ...provided,
    width: "635px !important",
    border: "none",
    borderColor: "white",
    display: "block !important",
    marginBottom: "80px ",
  }),
  control: (provided) => ({
    ...provided,
    width: "100% !important", // Set your desired width here (in
    padding: "10px",
    borderRadius: "10px",
  }),
};

const CreateTask = () => {
  const [btnloader, setBtnLoader] = useState(false);
  const categoriesData = useSelector((state) => state.seeder.categories);
  const userData = useSelector((state) => state.user.userData);
  // console.log(userData?.user?.id);
  // console.log(userData?.token);

  const [inputFields, setInputFields] = useState([""]); // Initialize with an array of one empty string
  // console.log(inputFields);
  const containsEmptyString = (arrayOfStrings) => {
    return arrayOfStrings.some((str) => str !== "");
  }
  // requirements
  const handleAddField = () => {
    setInputFields([...inputFields, ""]); // Append an empty string to the inputFields array
  };

  const handleRemoveFields = (index) => {
    if (index > 0) {
      const values = [...inputFields];
      values.splice(index, 1);
      setInputFields(values);
    } else {
      return false
    }
  };
  // form

  // initial values
  const initialValues = {
    service_Title: "",
    minimum_budget: "",
    service_Description: "",
    min_projectLength: 1,
    max_projectLength: null,
  };

  // validation
  const validationSchema = Yup.object().shape({
    service_Title: Yup.string().required("This field is required"),
    minimum_budget: Yup.string()
      .required("This field is required")
      .test(
        "max-length",
        "Maximum length exceeded",
        (value) => value.length <= 5
      ),
    service_Description: Yup.string().required("This field is required"),
    min_projectLength: Yup.string().required("This field is required"),
    max_projectLength: Yup.string().required("This field is required"),
  });

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };
  // form
  let navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (selectedOptions.length > 0 && containsEmptyString(inputFields)) {
      setBtnLoader(true);
      const data = {
        service_Title: values.service_Title,
        minimum_budget: String(values.minimum_budget),
        service_Description: values.service_Description,
        requirements: inputFields,
        category: convertToStringOfArray(selectedOptions),
        min_projectLength: values.min_projectLength,
        max_projectLength: values.max_projectLength,
        proposal: 0,
      };
      const resp = await createJob(data, userData?.token, userData?.user?.id)
      if (resp.status === 201) {
        toast.success(resp.data.message || "Task Created");
        setBtnLoader(false);
        setTimeout(() => {
          navigate(`/mytaskproposal?id=${resp.data.data._id}`);
        }, 2200);
      } else {
        toast.error(resp.data.message || "Server Error");
        setBtnLoader(false);
      }
    } else {
      toast.error("Please fill all fields");
      setBtnLoader(false);
    }
  };
  return (
    <React.Fragment>
      <ToastContainer />

      <div className={`container ${style.mble__screen}`}>
        <h2 className={style.title}>
          Create a <span>Task</span>
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              <Row>
                <Col sm={12} lg={5}>
                  <div className={style.first_col_content}>
                    <div className={style.job__title}>
                      <h2>Job Title</h2>
                      <p>A job little must describe one position only.</p>
                      <div className={style.input}>
                        <Field
                          name="service_Title"
                          type="text"
                          placeholder="e.g “ UI/UX Designer”"
                        />
                      </div>
                    </div>
                    <ErrorMessage
                      name="service_Title"
                      className={style.erorMsg}
                      component="div"
                    />

                    <div className={style.task__info}>
                      <div className={style.task__location}>
                        <h3>Select Category</h3>
                        <div className={style.project__lenght}>
                          <Select
                            closeMenuOnSelect={false}
                            styles={customSelectStyles}
                            className="custom-select"
                            classNamePrefix="custom-select"
                            isMulti
                            value={selectedOptions}
                            onChange={handleOptionChange}
                            options={categoriesData?.map((category) => ({
                              value: category._id,
                              label: category.category,
                            }))}
                          />
                        </div>
                        {/* <ErrorMessage
                              name="min_projectLength"
                              className={style.erorMsg}
                              component="div"
                            /> */}
                        <h3>Project length</h3>
                        <div className={style.project__lenght}>
                          <div>
                            <Field
                              type="number"
                              name="min_projectLength"
                              placeholder="0"
                            />

                          </div>
                          -
                          <div>
                            <Field
                              type="number"
                              placeholder="00"
                              name="max_projectLength"
                            />
                          </div>
                          Days
                        </div>
                        <ErrorMessage
                          name="max_projectLength"
                          className={style.erorMsg}
                          component="div"
                        />
                      </div>
                    </div>

                    <div className={style.req__container}>
                      <div className={style.task__location}>
                        <h3>Requirements</h3>
                      </div>
                      {inputFields?.map((inputField, index) => (
                        <div key={index}>
                          {" "}
                          {/* Make sure to add a key prop */}
                          <span className={style.req__input}>
                            <input
                              type="text"
                              name={`requirements[${index}]`} // Add a unique name for each input field
                              placeholder="your requirements.."
                              value={inputField} // Bind the input value to the corresponding state value
                              onChange={(e) => {
                                const updatedFields = [...inputFields];
                                updatedFields[index] = e.target.value;
                                setInputFields(updatedFields);
                              }}
                            />
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveFields(index)}
                            className={style.remove_icon_btn}
                          >
                            Remove
                          </button>
                          <button
                            type="button"
                            onClick={() => handleRemoveFields(index)}
                            className={style.remove__icon}
                          ></button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => handleAddField()} // Use the handleAddField function
                        className={style.add_field_btn}
                      >
                        Add Field
                      </button>
                    </div>
                  </div>
                </Col>
                <Col lg={1}>
                </Col>

                <Col sm={12} lg={6}>
                  <div className={style.second_col_content}>
                    <div className={style.job__title}>
                      <h2>Job Description </h2>
                      <p>
                        Provide a short description about job. Keep it short and
                        to the point.
                      </p>
                      <div
                        // style={{ minHeight: "300px" }}
                        className={style.input}
                      >
                        <Field
                          as="textarea"
                          name="service_Description"
                          placeholder="Short Description"
                        />
                      </div>
                      <ErrorMessage
                        name="service_Description"
                        className={style.erorMsg}
                        component="div"
                      />
                    </div>
                    <div className={style.salary}>
                      <div className={style.job__title}>
                        <h2>Budget </h2>
                        <div>
                          <p>Amount you want to pay</p>
                          <div className={style.budget__input}>
                            <Field
                              type="number"
                              placeholder="$30"
                              name="minimum_budget"
                              onInput={(e) => {
                                e.target.value = Math.max(
                                  0,
                                  parseInt(e.target.value)
                                )
                                  .toString()
                                  .slice(0, 5); // Maximum length of 5 characters
                              }}
                            />
                          </div>
                          <ErrorMessage
                            name="minimum_budget"
                            className={style.erorMsg}
                            component="div"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              {btnloader ? (
                <div className={`btnRelative ${style.createTaskLoda}`}>
                  <div class="lds-dual-ring"></div>
                  <button
                    style={{ borderRadius: "10px", border: "unset" }}
                    disabled
                  >
                    Create Task
                  </button>
                </div>
              ) : (
                <button
                  style={{ borderRadius: "10px", border: "unset", marginBottom: "40px", marginTop: "40px" }}
                  type="submit"
                >
                  Create Task
                </button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};

export default CreateTask;