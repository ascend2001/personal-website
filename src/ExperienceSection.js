import React from 'react';
import leaningMan from './assets/leaning-man.svg';
import hussleLogo from './assets/hussle-logo.png';
import oracleLogo from './assets/oracle-img.svg';
import ExpCard from './ExpCard';

const hussleWork = ['Worked on the development of the beta version of a cross-platform mobile app on a team of 10 developers for clients to offer and buy amateur services.',
  'Augmented a settings interface onto the user profile using React Native, Tab and Stack React Navigation, and Expo APIs.',
  'Performed UI/UX analysis on the current interface and identified 10+ pain points with optimal solutions on a team of 5 people.'];

const OracleInternWork = ['Converted a monthly Home Energy Report email to an external user-facing MERN-stack web application that presents dynamically updated data insights and a carbon footprint calculator, using real-time energy consumption data collected from Oracle Smart Energy Meters, to over 1 million+ active users.',
  'Augmented the data insights with a recommendation algorithm to recommend personalized energy efficiency and decarbonization tips to each user based on their energy consumption data, view their hypothetical consumption, and filter based on months, and years.'];

const OracleWork = ['Owned the end-to-end design and execution of a large-scale relational database migration (MySQL → Oracle Autonomous DB) for PII data across 5+ Java Dropwizard microservices, including schema design, data validation, rollout strategy, and rollback planning.\nResult: ~20% reduction in query latency across critical workflows serving 700,000+ customers.',
  'Delivered backend data-layer enhancements and built frontend modules for a production UI redesign of a GraphQL-backed React application used by 800+ utility companies, adding new seasonal energy savings performance rankings and peak-day rebate earning trends features that have increased customer onboarding by 28% and end user engagement by 15%.',
  'Improved system performance and deployment safety by implementing service-level metrics tracking and alerting with Prometheus across Dropwizard services, and Oozie workflows and increasing unit and integration test coverage to over 90% across 10+ products.',
  'Developed a PySpark analytics pipeline processing large-scale time-series energy consumption data and peak pricing from 200+ global utilities, calculating hourly savings forecasts over one year for end users based on rate plans, past usage and location heuristics.'];

function ExperienceSection() {
  return (
    <section className="flex flex-row gap-x-32 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white" id="Experience" name="Experience">
      <div className=" flex flex-col mt-6 ml-12 lg:basis-2/3">
        <div className="text-6xl mt-8">Experience</div>
        <ExpCard imageName={oracleLogo} company="Oracle America Inc." work={OracleWork} role="Applications Developer" timeline="July 2023 - Present" location="San Francisco, CA" />
        <ExpCard imageName={oracleLogo} company="Oracle America Inc." work={OracleInternWork} role="Software Engineering Intern" timeline="June 2022 - September 2022" location="Remote US" />
        <ExpCard imageName={hussleLogo} company="Hussle" work={hussleWork} role="Frontend Engineering Intern" timeline="September 2021 - December 2021" location="Los Angeles, CA" />
      </div>
      <div className="sm:hidden lg:flex place-items-center">
        <img src={leaningMan} alt="" className="leaning-man-img" />
      </div>

    </section>
  );
}

export default ExperienceSection;
