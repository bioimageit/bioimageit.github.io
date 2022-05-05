<template>
<div>
  <site-navbar></site-navbar>
  <div class="container">
    <div class="col-12">
      <h1>BioImageIT Community</h1>
      
      This document is devoted to guide decisions about the future of BioImageIT, whether to accept new functionalities, change the of the code architecture or modify the 
      graphical user interface (GUI), among other things. It serves as a reference point for developers and users, who are actively working on the project, and as an 
      introduction for newcomers who want to learn more about the project’s direction, its road map for the forthcoming years and the team’s values.
    </div>
    <div class="col-12">
     
      <div class="bi-spacer">
      </div> 

      <h2>Mission statement</h2>
      BioImageIT aims to be the <b>integration middleware to ease the interoperability between data management and data analysis software</b> for bio-imaging. The mission of 
      BioImageIT is to provide a graphical user interface (GUI) that allows any scientist without coding skills to annotate and analyze datasets using various software. We 
      hope to accomplish this by:
      <ul>
        <li>    
        Being <b>user-focused</b>. The user experience is the main objective of the BioImageIT project. GUI design, core development, software integration and documentation should be guided by the wish to make bioimage management and analysis easy for all scientists.
        </li>
        <li>
        Being <b>cross-platform</b>. BioImageIT should run on the most used <b>operating systems</b> (Windows, MacOS, Linux) and integrate existing tools without distinguishing their original <b>programing language</b> (c++, java, python…)   
        </li>
        <li>
        <b>Not reinventing the wheel</b>. All database management systems or data analysis tools should not be developed in the core code of BioImageIT but implemented as external plugins or wrappers to connect BioImageIT with existing open source software.
        </li>
        <li>
        Providing <b>a stable API</b> to enable standardization of communication with data management databases and data analysis tools.
        </li>
        <li>
        Being <b>well-documented</b> and <b>accessible</b>. The core code and plugins have to be documented for developers and users. We expect core code and plugins to be documented with docstrings and wrappers to be documented with a tutorial that is accessible to non-data science expert using real word examples.  
        </li>
      </ul>
      <div class="bi-spacer">
      </div> 
      <h2>About (the project and team)</h2> 
      <p>
      BioImageIT is an open-source community based project. Anyone interested in the project can join the community and contribute to the project. See the “Governance model” and 
      “How to contribute” sections for more information on the project management.
      </p>  
      <h3>Project history</h3>
      <p>
      The BioImageIT project started in 2019. It was born out from the realization that data scientists in cell biology labs and microscopy facilities spend a lot of time 
      dealing with installing software and writing scripts to glue together software developed with various languages (e.g., C++, Java, python…), in order to create home-made 
      image analysis pipelines. 
      </p>
      <p>
      BioImageIT is inspired from the Galaxy project which was designed to `wrap` data processing tools using conda packaging and containers with xml description files to create 
      data processing pipeline from any command line tools. We then realized that dealing with analysis pipelines does not match the real needs of scientists in bioimaging. Data 
      analysis pipelines need to be interactive and connected to database (image annotations and derivate data). Accordingly, we designed the first BioImageIT API at the end of 
      2019 to integrate data management with analysis. Since, the BioImageIT project became user-focused to help a given scientist to deal with a data analysis experiment, from 
      raw data to final result interpretation.
      </p>  
      <p>
      In 2020, we developed the graphical user interface and in 2021 we selected napari as the default viewer of BioImageIT.
      </p>  
      <p>
      The first prototype of BioImageIT was funded by France-BioImaging. Since October 2021, we obtained a France-BioImaging grant to install BioImageIT within 10 microscopy 
      facilities. In the next step, we will enlarge the set of facilities in France and Europe.    
      </p>  
      <p>
      "BioImageIT" suggests that our middleware solution dedicated to bioimaging, is able to adapt to any local IT infrastructure.
      </p>  

      <h3>Road map</h3>

      BioImageIT is being developed within the framework of the France BioImaging National Research Infrastructure (FBI). In the first step of deployment, this project is supported 
      by the Research Infrastructure until end of 2023. During the next 2 years, two engineers will focus on the deployment and maintenance of BioImageIT, as well as the 
      integration of new software. BioImageIT is being deployed within ten imaging platforms which are components of the France-BioImaging national infrastructure. A plan and 
      schedule have been validated by the FBI steering committee for funding (<a href="https://france-bioimaging.org/france-bioimaging-funding-decision/fbi-internal-call-2021-technology-transfer-results/">https://france-bioimaging.org/france-bioimaging-funding-decision/fbi-internal-call-2021-technology-transfer-results/</a>) 
      and can be accessed through <a href="https://github.com/bioimageit/bioimageit.github.io/raw/master/src/components/AO-FBI-tech-transfer-BioImage-ITbis.pdf">this link</a>. 


      <h3>Governance model</h3>
      <p>  
      The purpose of this section is to formalize the governance process used by the BioImageIT project.
      </p>
      <p>
      This is a community-based project based on consensus. Anyone interested can join the community, contribute to the project design, and participate in the decision making 
      process. This document describes how this participation takes place.   
      </p>  
      <p>
      The BioImageIT community is composed of anyone using or working on the project in any way.    
      </p>  

      <h3>How to contribute?</h3>
      <p>
      A community member can become a contributor by interacting directly with the project in concrete ways, such as:
      <ul>
        <li>
          Proposing a change to the code using GitHub pull request in any repository of the BioImageIT project
          <ul>
            <li><a href="https://github.com/bioimageit/bioimageit_core/pulls">bioimageit_core pull request</a></li> 
            <li><a href="https://github.com/bioimageit/bioimageit_gui/pulls">bioimageit_gui pull request</a></li> 
            <li><a href="https://github.com/bioimageit/bioimageit_formats/pulls">bioimageit_formats pull request</a></li> 
            <li><a href="https://github.com/bioimageit/bioimageit_viewer/pulls">bioimageit_viewer pull request</a></li> 
          </ul>  
        </li>
        <li>
          Reporting issues on the BioImageIT project <a href="https://github.com/bioimageit/bioimageit/issues">issue page</a>
        </li>  
        <li>
          Discussing design and new features in the <a href="https://github.com/bioimageit/bioimageit/issues">issue page</a>
        </li>  
        <li>
          Developing BioImageIT plugins (<a href="https://bioimageit.github.io/bioimageit_core/tutorial_write_a_runner_plugin.html">runner plugins</a>, <a href="https://bioimageit.github.io/bioimageit_core/tutorial_write_a_data_plugin.html">data plugins</a>)
        </li>  
        <li>
          Developing <a href="https://bioimageit.github.io/bioimageit_core/tutorial_wrap_a_tool.html">data processing wrappers</a> 
        </li>  
      </ul>      
      </p>  

      <h3>Core developers</h3>
      <p>
      Core developers are community members who have demonstrated a continuing commitment to the project through ongoing contributions. They have shown that they can be 
      trusted to maintain BioImageIT with care. Becoming a core developer allows contributors to merge approved pull requests, cast votes for and against merging a pull-request, 
      and be involved in deciding major changes to the API, and thereby making it easier to continue  their project related activities. Core developers appear as organization 
      members on the <a href="https://github.com/orgs/bioimageit/people">BioImageIT GitHub organization</a>. New core developers can be nominated by any existing core developer.
      </p>  

      <h3>Steering Council</h3>
      <p>  
      The steering council is the group of people responsible for the BioImageIT project. It consists of core developers and users whose role is to ensure the proper direction of 
      the project with respect to the mission statement, to make decisions concerning funding and maintenance. Together with the community they design the future of the project 
      (roadmap).   
      </p>
      <p>
      Current council members:
        <ul>
          <li><b>Sylvain Prigent</b>: BioImageIT project manager &#8211; Inria</li>
          <li><b>Ludovic Leconte</b>: Engineer responsible of the pilot study &#8211; CNRS/Curie</li>
          <li><b>Cesar Augusto Valades-Cruz</b>: Engineer &#8211; Institut Curie</li>
          <li><b>L&eacute;o Maury</b>: deployment Engineer &#8211; CNRS </li>
          <li><b>Jean Salamero</b>: Co-Head of Serpico/STED research team &#8211; CNRS/Curie site</li>
          <li><b>Charles Kervrann</b>: Head of Serpico/STED research team &#8211; Inria site</li>
        </ul>        
      </p>  
   
   <div class="bi-spacer">
      </div>
    <h2>Licensing</h2> 

    BioImageIT is distributed under the BSD-4-clause license, a copy is available <a href="https://raw.githubusercontent.com/bioimageit/bioimageit/main/LICENSE">here</a>. We notice 
    that BioImageIT plugins or wrapped tools may use different licenses. Please refer to the repositories of each plugin and wrapper to verify their license.

    <div class="bi-spacer">
      </div>
    <h2>Acknowledgements</h2>   

    BioImageIT project is highly connected to python imaging open-source projects like scikit-image and napari. We then acknowledge the influence of their mission and values 
    statement on this document.

      <div class="bi-spacer">
      </div>
      <div class="bi-spacer">
      </div>
      </div>
   </div>   
<site-footer></site-footer>     
</div>
</template>

<script>
import SiteNavbar from './SiteNavbar'
import SiteFooter from './SiteFooter'

export default {
  name: 'CommunityPage',
  props: {
  },
  methods: {
  },
  components: {
    SiteNavbar,
    SiteFooter
  }
}
</script>

<style scoped>
.bi-spacer{
  height: 50px;
}
</style>
