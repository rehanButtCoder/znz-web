import React from "react";
import style from "./messages.module.css";
import SingleCht from "./singleChat/SingleCht";

const Messages = () => {
  return (
    <div className={style.main__container}>
      <div className={style.search__box}>
        <div>
          <input type="text" placeholder="Search chats" />
        </div>
      </div>
      <div className={style.person__message}>
        <SingleCht
          userName={"Sher Alam"}
          image={"asserts/images/chat/chat-person.jpeg"}
          chatCount={5}
          status={"online"}
          bio={"What's up, how are you?"}
          time={"03:41 PM"}
        />
        </div>
        <div className={style.person__message}>
        <SingleCht
          userName={"Mian Ali"}
          image={"asserts/images/view-all-students/student.jpg"}
          chatCount={1}
          status={"offline"}
          bio={"What's up, how are you?"}
          time={"03:41 PM"}
        />
        </div>  
        <div className={style.person__message}>
          <SingleCht
          userName={"Mian Ali"}
          image={"asserts/images/seller-page/user_image.png"}
          chatCount={3}
          status={"online"}
          bio={"What's up, how are you?"}
          time={"03:41 PM"}
        />
        </div>
         <div className={style.person__message}>
        <SingleCht
          userName={"Mian Ali"}
          image={"asserts/images/seller-page/user_image.png"}
          chatCount={5}
          status={"away"}
          bio={"What's up, how are you?"}
          time={"03:41 PM"}
        />
        </div>
        <div className={style.person__message}>
        <SingleCht
          userName={"Mian Ali"}
          image={"asserts/images/seller-page/user_image.png"}
          chatCount={1}
          status={"offline"}
          bio={"What's up, how are you?"}
          time={"03:41 PM"}
        />
        </div>
        <div className={style.person__message}>
        <SingleCht
          userName={"Mian Ali"}
          image={"asserts/images/seller-page/user_image.png"}
          chatCount={3}
          status={""}
          bio={"What's up, how are you?"}
          time={"03:41 PM"}
        />
         <div className={style.person__message}>
        <SingleCht
          userName={"Mian Ali"}
          image={"asserts/images/view-all-students/student.jpg"}
          chatCount={1}
          status={"offline"}
          bio={"What's up, how are you?"}
          time={"03:41 PM"}
        />
        </div>  
        <div className={style.person__message}>
        <SingleCht
          userName={"Mian Ali"}
          image={"asserts/images/view-all-students/student.jpg"}
          chatCount={1}
          status={"offline"}
          bio={"What's up, how are you?"}
          time={"03:41 PM"}
        />
        </div>  
        <div className={style.person__message}>
        <SingleCht
          userName={"Mian Ali"}
          image={"asserts/images/view-all-students/student.jpg"}
          chatCount={1}
          status={"offline"}
          bio={"What's up, how are you?"}
          time={"03:41 PM"}
        />
        </div>  
        <div className={style.person__message}>
        <SingleCht
          userName={"Mian Ali"}
          image={"asserts/images/view-all-students/student.jpg"}
          chatCount={1}
          status={"offline"}
          bio={"What's up, how are you?"}
          time={"03:41 PM"}
        />
        </div>  
      </div>
    </div>
  );
};

export default Messages;
