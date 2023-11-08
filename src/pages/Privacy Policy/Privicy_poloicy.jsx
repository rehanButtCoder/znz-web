import React from "react";
import Style from "./Privicy_policy.module.css";
import { Container } from "react-bootstrap";

function PrivicyPolicy() {
  return (
    <Container>
      <div className={Style.main__container}>
        <h2 className={Style.title}>
          <span>Sparrow</span> Privacy Policy
        </h2>
        <span className={Style.date}>Last Updated: April 20, 2023</span>

        <div className={Style.para}>
          <p>
            This Privacy Policy (“Privacy Policy”) describes how Sparrow, LLC.
            and its affiliates will gather, use, and maintain your Personal
            Information on the Sparrow Platform. It will also explain your legal
            rights with respect to that information. <br />
            <br />
            By using the Sparrow Platform, you confirm that you have read and
            understand this Privacy Policy, and our Global Terms of Service
            (together referred to herein as the “Agreement”). The Agreement
            governs the use of the Sparrow Platform. Sparrow will collect, use,
            and maintain information consistent with the Agreement.
          </p>
        </div>

        {/* table of contents  */}
        <div className={Style.table__content__container}>
          <h2>Table of Contents</h2>
          <ol>
            <li>General Terms</li>
            <li>Information Collection</li>
            <li>Sparrow's Use Of Information</li>
            <li>Information Sharing</li>
            <li>Information Retention Policy</li>
            <li>Security Of Collected Information</li>
            <li>Children’s Privacy</li>
            <li>GJurisdiction-Specific Provisions</li>
          </ol>
        </div>
        {/* general terms  */}
        <div className={Style.general__term}>
          <h2>General Terms</h2>
          <div className={Style.desc}>
            <p className={Style.desc__title}>In this Privacy Policy:</p>
            <ul>
              <li>
                Sparrow, LLC. may be referred to as "Sparrow," “we,” “our,”or
                “us.”
              </li>
              <li>
                We call a user or client of the Spaarrow Platform “User,”
                “Users,” “you,” “your,” or “Client(s)” and “Student(s)” as
                appropriate.
              </li>
              <li>
                Students are categorized as school students attending at least
                12 units or more at any school or university.
              </li>
              <li>
                The community platform that we offer at our website
                (sparrow.com) is referred to as the “Site(s).”
              </li>
              <li>
                Sparrow’s Site and related services, information and
                communications are collectively referred to as the “Spaarrow
                Platform."
              </li>
              <li>
                “Terms of Service” refers to our Terms of Service, which can be
                found here. This Privacy Policy is incorporated into, and
                considered a part of, the Terms of Service.
              </li>
            </ul>
          </div>
        </div>

        {/* information collection  */}
        <div className={Style.information__collection}>
          <h2>Information Collection</h2>
          <div className={Style.para__desc}>
            <p>
              Information you provide to Spaarrow Spaarrow collects certain
              personally identifiable information about you, including
              information that can identify, relate to, describe, be associated
              with you, or is reasonably capable of being associated with you
              (“Personal Information”). Examples of Personal Information that
              Spaarrow collects include but are not limited to:
            </p>
            <span className={Style.headings__para}>
              <p>
                <span>Contact Information.</span> This may include your first
                and last name, postal address, telephone number, and email
                address.
              </p>
            </span>
            <span className={Style.headings__para}>
              <p>
                <span>Identity Information. </span>If you are a Student, we may
                collect Personal Information, such as your date of birth and
                address, national identification number if applicable, together
                with the result of basic criminal record checks as provided by
                you, or by our Third-Party Agents (as defined below), as
                applicable and to the extent permitted by law in your
                jurisdiction, as well as such information as may be needed to
                validate your identity.
              </p>
            </span>
            <span className={Style.headings__para}>
              <p>
                <span>Financial Information. </span>To help Students set up a
                payment account and help Clients make payments to Students and
                pay fees to Spaarrow, we may collect financial information,
                including credit card number, bank routing numbers, tax
                information, taxpayer identification number, and other payment
                information, as applicable. We use Financial Information in
                order to operate the Spaarrow Platform and to ensure that
                Students are paid by Clients. We do this as necessary for our
                legitimate interests in providing our platform and services and
                to fulfill our contracts with Users.
              </p>
            </span>
            <span className={Style.headings__para}>
              <p>
                <span>Promotional Information. </span>
                Certain offerings of the Sparrow Platform, such as newsletters,
                surveys, contests, and the like are optional and so you are not
                required to enter them or to give us your data in connection
                with them. Where you do consent to take advantage of Spaarrow
                Platform offerings, we will use your data to (as applicable)
                send you newsletters and other communications that are tailored
                based on information we have about you, or to operate and manage
                the survey, contest or similar offering in connection with our
                legitimate interest in promoting our business and the Sparrow
                Platform.
              </p>
            </span>
            <span className={Style.headings__para}>
              <p>
                <span>Employment Information. </span>
                We collect employment and education history, transcripts,
                writing samples, and references as necessary to consider your
                job application for open positions.
              </p>
            </span>
            <span className={Style.headings__para}>
              <p>
                <span>Content Information. </span>
                You also may choose to send Sparrow Personal Information in an
                email or chat message containing inquiries about the Sparrow
                Platform and we use this Information in order to help us respond
                to your inquiry. We also collect content within any messages you
                exchange with other Users through the Sparrow Platform (such as
                through our chat functionality).
              </p>
            </span>
            <span className={Style.headings__para}>
              <p>
                We require that you furnish certain information when you
                register an account with us in order to provide services through
                the Sparrow Platform. For example, if you are a Client, we
                collect your first and last name, email address, and your zip or
                postal code in order to create and administer your Sparrow
                account. We also collect additional information in order to
                facilitate your booking request, such as information about the
                task you are seeking, the time, date and location of the task,
                and Billing Data. If you are a Student, we collect your first
                and last name, email address, mobile phone number and zip or
                postal code in order to create and administer your Sparrow
                account and facilitate communications between you and your
                Clients through the Sparrow Platform. We also collect
                information about your tasks, rates, and skills, as well as
                Identity Information and Financial Information.
              </p>
            </span>
            <span className={Style.headings__para}>
              <p>
                <span>Third Party Information. </span>
                Financial Information, or fraud detection information, from
                Third-Party Agents (as defined below) and combine it with other
                information that we have about you, to the extent permitted by
                law, in order to comply with our legal obligations and for the
                legitimate interest in improving the Sparrow Platform. Sparrow
                may work with Third-Party Agents to perform identity checks and
                criminal background checks on Students, if applicable and
                permitted by local law, in order to advance our legitimate
                interests in ensuring the safety of our Users/Families and
                maintaining the integrity of the Sparrow Platform.
              </p>
            </span>
          </div>
        </div>

        {/* use of information  */}
        <div className={Style.general__term}>
          <h2>Sparrow's Use Of Information</h2>
          <div className={Style.desc}>
            <p className={Style.desc__title}>
              We collect and use information for business and commercial
              purposes in accordance with the practices described in this
              Privacy Policy. Our business purposes for collecting and using
              information include:
            </p>
            <ul>
              <li>
                To operate and make available the Sparrow Platform. We use your
                data to connect you with other Users/Families to enable the
                posting of, selection for, completion of, and payment for Tasks,
                in order to fulfill our contracts with Users;
              </li>
              <li>
                For billing and fraud prevention, on the basis of our legitimate
                interests in ensuring a safe and secure environment in which
                Clients and Students can meet and conduct business, and in order
                to comply with our legal obligations;
              </li>
              <li>
                To conduct identification and criminal background checks, if
                applicable and to the extent permitted by local law, on Users,
                in order to advance our legitimate interests as well as for the
                substantial public interest of ensuring the safety of our Users
                both online and offline, preventing or detecting unlawful acts,
                protecting the public against dishonesty, and maintaining the
                integrity of the Spaarrow Platform given that Students often
                interact directly with Clients and may enter their homes;
              </li>
              <li>
                To analyze Sparrow Platform usage as necessary for our
                legitimate interest in improving the Sparrow Platform to grow
                our business;
              </li>
              <li>
                Sparrow’s Site and related services, information and
                communications are collectively referred to as the “Spaarrow
                Platform."
              </li>
              <li>
                “Terms of Service” refers to our Terms of Service, which can be
                found here. This Privacy Policy is incorporated into, and
                considered a part of, the Terms of Service.
              </li>
            </ul>
          </div>
        </div>

        {/* information sharing  */}
        <div className={Style.general__term}>
          <h2>Sparrow's Use Of Information</h2>
          <div className={Style.desc}>
            <p className={Style.desc__title}>
              We collect and use information for business and commercial
              purposes in accordance with the practices described in this
              Privacy Policy. Our business purposes for collecting and using
              information include:
            </p>

            <span className={Style.headings__para}>
              <p>
                <span>Third Party Information. </span>
                Financial Information, or fraud detection information, from
                Third-Party Agents (as defined below) and combine it with other
                information that we have about you, to the extent permitted by
                law, in order to comply with our legal obligations and for the
                legitimate interest in improving the Sparrow Platform. Sparrow
                may work with Third-Party Agents to perform identity checks and
                criminal background checks on Students, if applicable and
                permitted by local law, in order to advance our legitimate
                interests in ensuring the safety of our Users/Families and
                maintaining the integrity of the Sparrow Platform.
              </p>
            </span>
            <p className={Style.desc__title}>
              We collect and use information for business and commercial
              purposes in accordance with the practices described in this
              Privacy Policy. Our business purposes for collecting and using
              information include:
            </p>

            <ul>
              <li>
                To operate and make available the Sparrow Platform. We use your
                data to connect you with other Users/Families to enable the
                posting of, selection for, completion of, and payment for Tasks,
                in order to fulfill our contracts with Users;
              </li>
              <li>
                For billing and fraud prevention, on the basis of our legitimate
                interests in ensuring a safe and secure environment in which
                Clients and Students can meet and conduct business, and in order
                to comply with our legal obligations;
              </li>
              <li>
                To conduct identification and criminal background checks, if
                applicable and to the extent permitted by local law, on Users,
                in order to advance our legitimate interests as well as for the
                substantial public interest of ensuring the safety of our Users
                both online and offline, preventing or detecting unlawful acts,
                protecting the public against dishonesty, and maintaining the
                integrity of the Spaarrow Platform given that Students often
                interact directly with Clients and may enter their homes;
              </li>
              <li>
                To analyze Sparrow Platform usage as necessary for our
                legitimate interest in improving the Sparrow Platform to grow
                our business;
              </li>
              <li>
                Sparrow’s Site and related services, information and
                communications are collectively referred to as the “Spaarrow
                Platform."
              </li>
              <li>
                “Terms of Service” refers to our Terms of Service, which can be
                found here. This Privacy Policy is incorporated into, and
                considered a part of, the Terms of Service.
              </li>
            </ul>
            <span className={Style.headings__para}>
              <p>
                <span>Third Party Information. </span>
                Financial Information, or fraud detection information, from
                Third-Party Agents (as defined below) and combine it with other
                information that we have about you, to the extent permitted by
                law, in order to comply with our legal obligations and for the
                legitimate interest in improving the Sparrow Platform. Sparrow
                may work with Third-Party Agents to perform identity checks and
                criminal background checks on Students, if applicable and
                permitted by local law, in order to advance our legitimate
                interests in ensuring the safety of our Users/Families and
                maintaining the integrity of the Sparrow Platform.
              </p>
            </span>
            <span className={Style.headings__para}>
              <p>
                <span>Third Party Information. </span>
                Financial Information, or fraud detection information, from
                Third-Party Agents (as defined below) and combine it with other
                information that we have about you, to the extent permitted by
                law, in order to comply with our legal obligations and for the
                legitimate interest in improving the Sparrow Platform. Sparrow
                may work with Third-Party Agents to perform identity checks and
                criminal background checks on Students, if applicable and
                permitted by local law, in order to advance our legitimate
                interests in ensuring the safety of our Users/Families and
                maintaining the integrity of the Sparrow Platform.
              </p>
            </span>
            <span className={Style.headings__para}>
              <p>
                <span>Third Party Information. </span>
                Financial Information, or fraud detection information, from
                Third-Party Agents (as defined below) and combine it with other
                information that we have about you, to the extent permitted by
                law, in order to comply with our legal obligations and for the
                legitimate interest in improving the Sparrow Platform. Sparrow
                may work with Third-Party Agents to perform identity checks and
                criminal background checks on Students, if applicable and
                permitted by local law, in order to advance our legitimate
                interests in ensuring the safety of our Users/Families and
                maintaining the integrity of the Sparrow Platform.
              </p>
            </span>
          </div>
        </div>
        <div className={Style.general__term}>
          <h2>Sparrow's Use Of Information</h2>
          <div className={Style.desc}>
            <p className={Style.desc__title}>
              We collect and use information for business and commercial
              purposes in accordance with the practices described in this
              Privacy Policy. Our business purposes for collecting and using
              information include:
            </p>
          </div>
        </div>
        <div className={Style.general__term}>
          <h2>Sparrow's Use Of Information</h2>
          <div className={Style.desc}>
            <p className={Style.desc__title}>
              We collect and use information for business and commercial
              purposes in accordance with the practices described in this
              Privacy Policy. Our business purposes for collecting and using
              information include:
            </p>
          </div>
        </div>
        <div className={Style.general__term}>
          <h2>Sparrow's Use Of Information</h2>
          <div className={Style.desc}>
            <p className={Style.desc__title}>
              We collect and use information for business and commercial
              purposes in accordance with the practices described in this
              Privacy Policy. Our business purposes for collecting and using
              information include:
            </p>
          </div>
        </div>
        <div className={Style.general__term}>
          <h2>Sparrow's Use Of Information</h2>
          <div className={Style.desc}>
            <p className={Style.desc__title}>
              We collect and use information for business and commercial
              purposes in accordance with the practices described in this
              Privacy Policy. Our business purposes for collecting and using
              information include:
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PrivicyPolicy;
