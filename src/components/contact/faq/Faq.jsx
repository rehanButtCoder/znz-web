import React, { useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import "./Faq.css"

const Faq = () => {
    function createFAQobject(head, body) {
        return {head, body};
    }
    
    const data_array = [
        createFAQobject('What is Znz?' , 'Znzis an online marketplace that connects freelance labor of students with local demand, allowing clients to get an extra hand with everyday tasks. Students face great responsibilities with academics, work, social life, and athletic commitments. Many students can not fully commit to their academics and are often compelled to prioritize work in order to attend school. Over 70% of students rely on a job to finance their education with living expenses, tuition, and student debt at a record high. It is not only complicated for students to find flexible work that aligns with their schedule, but most available jobs pay only minimum wage. Thus, Znzintends to support and help every student obtain academic success by making work more flexible.'),
        createFAQobject('Why should I trust Znz?' , 'Znzperforms an optimal vetting process of all students and clients to ensure a safe and trustworthy experience for everyone on the platform. We perform an identity and criminal background check of every student and client on the platform. Students are also verified by their school and will only be allowed to sign up using their school email. Consequently, students who are found in misconduct violation per Znz’s policy will be banned from the platform and will be unable to sign up again. This allows us to always connect local families with qualified and trustworthy students. We take the security of user information seriously and ensure all sensitive information like your full name and address is handled carefully in accordance with our Privacy Policy.'),
        createFAQobject('What makes Znzdifferent from other comparison sites?' , ' Znzis exclusively built for students to work on the platform. We are committed to help students find flexible work to successfully finance their academics and lower student debt while also helping their local community. Our mission is to help all our students succeed by allowing them flexibility between school and work.'),
        createFAQobject('How does Znzmake money?' , ' Znzis committed to offer all students financial support and will not charge students any service fee. Instead, we charge clients a small service fee for connecting them with a student. The fee is only charged after a client and student have been matched and are in direct contact with each other.'),
        createFAQobject('Who can sign up for Znz?' , ' Our platform is exclusively built for student laborers. However, any and all interested individuals can become clients and sign up to hire a student and get help with any task. Clients will have the gratification of knowing that by participating through Znz, they are supporting the students of their local schools and universities.'),
        createFAQobject('How does the platform work?' , ' After signing up and creating a profile, clients will be able to create their specific tasks. The task can either be a one-time or reoccuring job that could be repeated every week. The client can search and invite multiple candidates for each task. Once a suitable student accepts the offer, both parties will get in direct contact through the platform to arrange further details about the time, place, etc. The student will be paid by the client only after the task has been completed.'),
        createFAQobject('Why should I hire a student helper for my tasks?' , ' Students are motivated, fun, and reliable people to work with. Students who sign up to the platform show their willingness to succeed in school and in life creating their own opportunities to do so. What is better than getting an extra hand while helping someone reach their academic goals?'),
        createFAQobject('How do I pay my student helper?' , ' Every client pays a small service fee for connecting with a student. Since the students act as individual contractors, it is up to the client and student to determine the best possible payment method, including checks, cash or any payment app entities such as Venmo.'),
        createFAQobject('What are the liabilities of Znz?' , ' Znzdoes not undertake responsibility for any damages to the client and student or any of their properties. Students are independent contractors of clients and not employed by Znz. Moreover, the platform provides no warranty and has no liability regarding students\' action or performance of the task on the platform. Znzonly operates as an online marketplace that connects clients with qualified students who wish to perform a variety of tasks. For more information read about our terms and policy.'),
        createFAQobject('What happens if I cancel my task on Znz?' , ' If unforeseen circumstances require cancellation of the task by either party, it is the responsibility of the canceling party to immediately and directly inform the other party to respect everyone\'s time. '),
        createFAQobject('How do I improve chances of getting picked by a client?' , ' Clients are looking for the most suitable student laborer for the task. Students must ensure to thoroughly and accurately complete their student profile. Timeliness and promptness of responses will help a student secure more tasks quicker. Encouragement of positive reviews posted via Znzshould be highly encouraged. Any and all tasks that you feel accomplished at completing, will make you more marketable.'),
    ];


  return (
    <div className="faq">
      <div className="profileHead ">
        <h2>
          Frequently Asked <span className="active">Questions</span>
        </h2>
      </div>
      <div className="faqSec pt-5">
        <Container>
          <Accordion defaultActiveKey="0">
            {data_array.map((singleFaq, index) => {
              return (
                <Accordion.Item eventKey={index} key={index}>
                  <Accordion.Header>
                    {" "}
                    <p>{singleFaq.head}</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>{singleFaq.body}</p>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Container>
      </div>
    </div>
  );
};

export default Faq;
