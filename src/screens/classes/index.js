import React from 'react';
import { Fade } from 'react-reveal';

import './style.scss';

const $ = require('jquery');

const Classes = () => {
  // show the course description when the user clicks on the course title
  const handleTitleClick = (event) => {
    $(event.currentTarget).parent().find('.description').slideToggle(350);
  };

  return (
    <div id="classes">
      <Fade>
        <h3>Upcoming Classes (Winter 2021)</h3>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>CS 98.02: Senior Design and Implementation Project II</p>
          <p className="description">
           Participation in a software engineering group project to meet a real-world need. Group members are responsible for all aspects of a software system,
           including iterative requirements analysis, design, implementation, and testing. The course also stresses customer interactions, documentation,
           process, and teamwork. The result is a software product of significant scope and significant benefit to a user base.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>CS 51: Computer Architecture</p>
          <p className="description">
            The architecture and organization of a simple computer system is studied. Topics covered include how information is represented in memory,
            machine-language instructions and how they can be implemented at the digital logic level and microcode level, assembly language programming,
            and input/output operations. Speedup techniques, such as pipelining and caching, are also covered.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>QSS 83: Minor Culminating Project</p>
          <p className="description">
            Culminating research project for the Minor in Quantitative Social Sciences.
          </p>
        </div>

        <br />
        <h3>Relevant Past Courses</h3>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>CS 1: Introduction to Programming and Computation</p>
          <p className="description">
            This course introduces computational concepts that are fundamental to computer science and are useful for the sciences,
            social sciences, engineering, and digital arts. Students will write their own interactive programs to analyze data,
            process text, draw graphics, manipulate images, and simulate physical systems.
            Problem decomposition, program efficiency, and good programming style are emphasized throughout the course.
            No prior programming experience is assumed.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>CS 10: Problem Solving via Object-Oriented Programming</p>
          <p className="description">
            Motivated by problems that arise in a variety of disciplines, this course examines concepts and develops skills in solving
            computational problems. Topics covered include abstraction (how to hide details), modularity (how to decompose problems),
            data structures (how to efficiently organize data), and algorithms (procedures for solving problems).
            Laboratory assignments are implemented using object-oriented programming techniques.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>CS 11: Foundations of Applied Computer Science</p>
          <p className="description">
            This course introduces core computational and mathematical techniques for data analysis and physical modeling,
            foundational to applications including computational biology, computer vision, graphics, machine learning, and robotics.
            The approaches covered include modeling and optimizing both linear and nonlinear systems, representing and computing with uncertainty,
            analyzing multi-dimensional data, and sampling from complex domains. The techniques are both grounded in mathematical principles and
            practically applied to problems from a broad range of areas.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>CS 30: Discrete Mathematics in Computer Science</p>
          <p className="description">
            This course integrates discrete mathematics with algorithms and data structures, using computer science applications to motivate the mathematics.
            It covers logic and proof techniques, induction, set theory, counting, asymptotics, discrete probability, graphs, and trees.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>CS 31: Algorithms</p>
          <p className="description">
            A survey of fundamental algorithms and algorithmic techniques, including divide-and-conquer algorithms, lower bounds, dynamic programming,
            greedy algorithms, amortized analysis, and graph algorithms. Presentation, implementation and formal analysis, including space/time complexity
            and proofs of correctness, are all emphasized.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>CS 50: Software Design and Implementation</p>
          <p className="description">
            Techniques for building large, reliable, maintainable, and understandable software systems.
            Topics include UNIX tools and filters, programming in C, software testing, debugging, and teamwork in software development.
            Concepts are reinforced through a small number of medium-scale programs and one team programming project.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>CS 52: Full-Stack Web Development <span className="citation">*</span></p>
          <p className="description">
            The Web is a powerful delivery tool for complex real-time applications.
            This is an introduction to full stack Web application development ??? the approach of integrating numerous techniques and technologies to build modern Web applications.
            Topics include: static pages, Internet protocols, layout, markup, event-driven asynchronous programming, deployment, security, scalability, and user experience.
            Projects include building real-time Web applications with front-end UIs and server-side APIs.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>CS 55: Security and Privacy</p>
          <p className="description">
          The migration of important social processes to distributed, electronic systems raises critical security and privacy issues.
          Precisely defining security and privacy is difficult; designing and deploying systems that provide these properties is even harder.
          This course examines what security and privacy mean in these settings, the techniques that might help, and how to use these techniques effectively.
          Our intention is to equip computer professionals with the breadth of knowledge necessary to navigate this emerging area.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>CS 61: Database Systems</p>
          <p className="description">
          This course studies the management of large bodies of data or information. This includes schemes for the representation,
          manipulation, and storage of complex information structures as well as algorithms for processing these structures efficiently
          and for retrieving the information they contain. This course will teach the student techniques for storage allocation and deallocation,
          retrieval (query formulation), and manipulation of large amounts of heterogeneous data. Students are expected to program and become
          involved in a project in which they study important aspects of a database system: ways to organize a distributed database shared by
          several computers; transactions that are processed locally and globally; robustness guarantees of the stored data against failure;
          security and data integrity guarantees from unauthorized access; privacy; object-oriented schemes for multimedia data; indexing,
          hashing, concurrency control, data mining, data warehousing, mobile databases and storage file structures.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>CS 65: Smartphone Programming</p>
          <p className="description">
            This course teaches students how to design, implement, test, debug and publish smartphone applications.
            Topics include development environment, phone emulator, key programming paradigms, UI design including views and activities,
            data persistence, messaging and networking, embedded sensors, location based services (e.g., Google Maps), cloud programming,
            and publishing applications. Concepts are reinforced through a set of weekly programming assignments and group projects.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>CS 74: Machine Learning and Statistical Data Analysis</p>
          <p className="description">
            This course provides an introduction to statistical modeling and machine learning. Topics include learning theory, supervised and
            unsupervised machine learning, statistical inference and prediction, and data mining. Applications of these techniques to a wide
            variety of data sets will be described.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>CS 98.01: Senior Design and Implementation Project I</p>
          <p className="description">
           Participation in a software engineering group project to meet a real-world need. Group members are responsible for all aspects of a software system,
           including iterative requirements analysis, design, implementation, and testing. The course also stresses customer interactions, documentation,
           process, and teamwork. The result is a software product of significant scope and significant benefit to a user base.
          </p>
        </div>

        <br />

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>QSS 17: Data Visualization</p>
          <p className="description">
            Big data are everywhere ??? in government, academic research, media, business, and everyday life.
            To tell the stories hidden behind blizzards of data, effective visualization is critical.
            This course primarily teaches R, a free software environment for statistical computing and graphics,
            which is widely regarded as one of the most versatile and flexible tools for data visualization and, more broadly, data science.
            Students completing the course will know how to ???wrangle??? and visualize data critical to their scientific endeavors.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>QSS 18: Introduction to Game Theory</p>
          <p className="description">
            Game theory is used to study how individuals and organizations interact strategically, and this course introduces game theory with a focus
            on political science applications. Game theory is a standard tool in the social sciences, and insights from game theory are essential to
            understanding many facets of politics, such as political party competition, legislative politics, international relations, and the provision
            of public goods. Among other topics, the course will cover normal and extensive form games, Nash equilibria, imperfect information, mixed
            strategies, and, if time permits, the basics of games with incomplete information. A course in game theory will change the way that one views
            the world.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>QSS 30.03: Experiments in Politics</p>
          <p className="description">
          This class is a lab-style seminar in which we will design, field, and analyze an experimental study of political misperceptions.
          Our goal is to publish a scholarly article about our findings in a peer-reviewed journal of political science-an ambitious project
          that will require a substantial commitment from each student. Flexibility will also be essential since the course will evolve during
          the semester based on the needs of the project.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>QSS 41: Analysis of Social Networks</p>
          <p className="description">
          Students will gather and analyze data on a variety of networks (institutions, communities, elites, friendship systems, kinship systems,
          trade networks, and the like). Techniques of analysis may include graph theory, text analysis, multidimensional scaling and cluster analysis,
          and a variety of special models. Not limited to students in the major.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>ECON 20: Econometrics</p>
          <p className="description">
            Econometrics is the statistical analysis of economic data.
            This course focuses on regression analysis (specification, estimation, and hypothesis testing) and problems and pitfalls in its application in economics.
            The course involves extensive use of the statistical program STATA and will enable students to implement their own empirical research projects
            in preparation for the culminating experience in the economics major.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>ECON 24: Development Economics</p>
          <p className="description">
          This course uses economic analysis to understand contemporary issues in low-income countries. We consider why extreme poverty and hunger,
          child mortality, low-levels of education, gender inequality, environmental degradation, high fertility, and child labor are pervasive in the
          developing world. We also examine the economic consequences of globalization and infectious diseases such as malaria and HIV/AIDS.
          For each topic, we seek to understand the factors and constraints influencing decision-making in developing countries. We use this understanding
          to discuss the role of markets, civil organizations, government policy, and international institutions.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>GOVT 7.3: Media and Politics <span className="citation">*</span></p>
          <p className="description">
            The variety of media sources covering politics has expanded substantially in recent years: online-only news, satire-based news,
            social media forums such as blogs, and other types of ???new media??? now exist alongside more traditional media sources such as
            newspapers and television news hours. In this seminar, we will explore how the media influences the nature of politics and political
            knowledge in the United States. Some of the questions we will examine include: How does the rise of new media affect the public???s
            understanding of politics? Are market forces pushing media outlets away from objective, in-depth, fact-based political reporting?
            How prevalent is partisan bias in the news media? How do journalists and politicians vie for control of the news?
            How powerful can the media be in anointing (or destroying) candidates? Students who are devoted to improving their paper-writing
            abilities are encouraged to take this class, as we will spend about half of our classroom time discussing the media and about half of
            our time discussing writing and associated seminar abilities. Students will write and revise two 5-6 page analytical papers during the
            term; additionally, a class-produced blog about the media and politics will give us the opportunity to contrast formal and informal
            genres of writing and argumentation.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>GOVT 10: Quantitative Political Analysis</p>
          <p className="description">
            This course will provide students with useful tools for undertaking empirical research in political science and will help them to
            become informed consumers of quantitative political analysis. The course will first consider the general theoretical concepts underlying
            empirical research, including the nature of causality, the structure and content of theories, and the formulation and testing of
            competing hypotheses. The course will then employ these concepts to develop several quantitative approaches to political analysis.
            Students will be introduced to two statistical methods frequently used by political scientists, contingency tables and linear regression.
            By learning to systematically analyze political data, students will gain the ability to better conduct and evaluate empirical research
            in both its quantitative and qualitative forms.
          </p>
        </div>

        <div className="course-dropdown">
          <p className="title" onClick={handleTitleClick}>GOVT 30.04: Political Misinformation & Conspiracy Theories</p>
          <p className="description">
            Why do people hold false or unsupported beliefs about politics and why are so those beliefs so hard to change? This course will explore the
            psychological factors that make people vulnerable to political misinformation and conspiracy theories and the reasons that corrections so
            often fail to change their minds. We will also analyze how those tendencies are exploited by political elites and consider possible approaches
            that journalists and civic reformers could employ to combat misperceptions.
          </p>
        </div>

        <div id="citation-explanation">
          <p><span className="citation">*</span> indicates a merit citation</p>
        </div>
      </Fade>
    </div>
  );
};

export default Classes;
