<template>
  <section>
    <div class="flex flex-col justify-center items-center">
      <ProjectHeader
        class="max-w-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-6 mb-6"
      />
      <div
        class="flex flex-col md:flex-row flex-wrap max-w-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-4"
      >
        <ProjectCard
          size="large"
          title="Founder &amp; President of the UoL Diabetes Group"
          description="Founded &amp; President of the University of Lincoln Diabetes Group. Maintaining responsibilities, organisation, leadership skills, delegating roles and communication. Organised events, fundraisers and liased with resarchers regarding research projects."
          dates="2015 - 2017"
        />
        <ProjectCard
          size="large"
          title="Microsoft Technology Associate"
          description="Officially certified as a Microsoft Technology Associate in HTML5 Application Development Fundamentals."
          dates="2019"
        />
        <ProjectCard
          size="large"
          title="Google Cloud Platform Certification"
          description="Achieved the official Google Cloud Platform Fundamentals: Core Infrastructure Certficiation."
          dates="2019"
        />
        <ProjectCard
          size="medium"
          title="Computer Science Course Representative"
          description="Course Representative for Computer Science at University. Ability to communicate well, plan well and manage time successfully."
          dates="2015 - 2016"
        />
        <ProjectCard
          size="medium"
          title="ICT Service Desk Technician"
          description="Solving problems with computers and mobile devices across multiple operating systems and give out technical advice."
          dates="2015 - 2017, 2018 - 2019"
        />
        <ProjectCard
          size="medium"
          title="School of Computer Science Student Ambassador"
          description="Supporting events such as Open Days, Applicant Open Days, School liaison events and other odd jobs around the School."
          dates="2015 - 2017"
        />
        <ProjectCard
          size="medium"
          title="The Lincoln Award"
          description="I have completed the Lincoln Award; the University of Lincoln’s standalone Employability award."
          dates="2016"
        />
        <ProjectCard
          size="large"
          title="IT Tutor (Volunteer)"
          description="Volunteer at the Long Eaton 50+ Forum to teach 50+ year olds a better understanding in using their computing and mobile devices."
          dates="2015 - present"
        />
        <ProjectCard
          size="large"
          title="AOL London Work Placement"
          description="Placement in AOL's specialised web and software department to gain valuable advice and experience from experts within a multinational company. Shadowed teams of developers and designers mainly working with JavaScript technologies. Also given opportunity to attend meetings on advertising based solutions."
          dates="2014"
        />
        <ProjectCard
          size="large"
          title="School of Computer Science Interview Panel"
          description="Questioned candidates in the recruitment of new lecturers and researchers. Communicated feedback to the Head of School"
          dates="2017"
        />
        <ProjectCard
          size="large"
          title="NHS Practice IT Consultant"
          description="Implemented media solutions for a professional inspection and solving general IT problems within the practice."
          dates="2015"
        />
        <ProjectCard
          size="large"
          title="BCS work placement"
          description="Placement in local computer repair shop. Allowed me to understand working professionally and give good customer service."
          dates="2014"
        />
        <ProjectCard
          size="large"
          title="2:1 in Brilliant Club scheme"
          description="2:1 in the Brilliant Club programme where I attended tutorials and completed a University assignment whilst at Sixth Form."
          dates="2013"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProjectCard from '@/components/project-card/ProjectCard.vue';
import ProjectHeader from '@/components/project-card/ProjectHeader.vue';
@Component({
  components: {
    ProjectCard,
    ProjectHeader
  }
})
export default class Projects extends Vue {}
</script>
