<template>
  <div>
    <EducationHeader />
    <div class="flex flex-col md:flex-row justify-center mb-4">
      <YearModules
        class="w-full md:w-1/3"
        :title="educationContent.year_1_title"
        :modules="educationContent.year_1_modules"
      />
      <YearModules
        class="w-full md:w-1/3"
        :title="educationContent.year_2_title"
        :modules="educationContent.year_2_modules"
      />
      <YearModules
        class="w-full md:w-1/3"
        :title="educationContent.year_3_title"
        :modules="educationContent.year_3_modules"
      />
    </div>
    <PlacementYearRow />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EducationHeader from './education/EducationHeader.vue';
import PlacementYearRow from './education/PlacementYearRow.vue';
import YearModules from './education/YearModules.vue';

@Component({
  components: {
    EducationHeader,
    PlacementYearRow,
    YearModules
  }
})
export default class Education extends Vue {
  educationContent = {
    year_1_title: 'Level 1 Modules',
    year_1_modules: [
      {
        title: 'Programming & Data Structures',
        result: '1st'
      },
      {
        title: 'Algorithms Complexity',
        result: '2:1'
      },
      {
        title: 'Maths for Computing',
        result: '1st'
      },
      {
        title: 'Web Authoring',
        result: '2:1'
      },
      {
        title: 'Problem Solving',
        result: '1st'
      },
      {
        title: 'Computer Architectures',
        result: '2:1'
      },
      {
        title: 'Operating Systems',
        result: '1st'
      },
      {
        title: 'Web Applications Development',
        result: 'Volunteer'
      }
    ],
    year_2_title: 'Level 2 Modules',
    year_2_modules: [
      {
        title: 'Object Oriented Programming',
        result: '1st'
      },
      {
        title: 'Database Systems',
        result: '1st'
      },
      {
        title: 'Human Computer Interfaction',
        result: '1st'
      },
      {
        title: 'Artificial Intelligence',
        result: '1st'
      },
      {
        title: 'Professional Practice',
        result: '1st'
      },
      {
        title: 'Networks & Network Systems',
        result: '1st'
      },
      {
        title: 'Group Project',
        result: '1st'
      },
      {
        title: 'Programming Paradigms',
        result: '2:1'
      }
    ],
    year_3_title: 'Level 3 Modules',
    year_3_modules: [
      {
        title: 'Software Engineering',
        result: '1st'
      },
      {
        title: 'Mobile Computing',
        result: '1st'
      },
      {
        title: 'Image Processing',
        result: '1st'
      },
      {
        title: 'Cross-Platform Development',
        result: '1st'
      },
      {
        title: 'Final Year Project',
        result: '1st'
      },
      {
        title: 'Autonomous Mobile Robotics',
        result: '1st'
      },
      {
        title: 'Parallel Computing',
        result: '1st'
      }
    ]
  };
}
</script>
