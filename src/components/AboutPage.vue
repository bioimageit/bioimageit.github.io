<template>
<div>
  <site-navbar></site-navbar>
  <div class="container">
    <div class="col-12">
      <h1>About</h1>
    </div>
    <div class="col-12">

    <div class="bi-spacer">
    </div> 
    
      <h2>The BioImageIT project</h2>
      
      Started in 2019 with France-BioImaging, the BioImageIT project aims at providing a middleware that integrates data management with analysis using existing softwares (Omero, BioFormats, Fiji, napari, Scipy, pytorch...)
      The BioImageIT software is open-source and available at <a href="https://github.com/bioimageit">https://github.com/bioimageit</a>
      
          <div class="bi-spacer">
    </div> 
      <h2>Road map</h2>
      BioImageIT is being developed within the framework of the France BioImaging National Research Infrastructure (FBI). As a first step of deployment, this project is supported by the Research Infrastructure, until the end of 2023. For the 2 years, two engineers are dedicated to the deployment and maintenance of BioImageIT, as well as the integration of new software. BioImageIT is now being deployed on ten imaging platforms of the France-BioImaging national infrastructure. A plan and schedule have been validated for funding by the FBI steering committee (<a href="https://france-bioimaging.org/france-bioimaging-funding-decision/fbi-internal-call-2021-technology-transfer-results/">https://france-bioimaging.org/france-bioimaging-funding-decision/fbi-internal-call-2021-technology-transfer-results/</a>) and can be accessed through <a href="https://github.com/bioimageit/bioimageit.github.io/raw/master/src/components/AO-FBI-tech-transfer-BioImage-ITbis.pdf">this link</a>. 

    <!--
      <h2>The BioImageIT project</h2>

      <p><i>
      Open science and <a href="https://www.go-fair.org/fair-principles/">FAIR principles</a> became major topics in the field of microscopy 
      for biology. This is due to both the new data 
      acquisition technologies like super-resolution microscopy and lightsheet microscopy that generate large datasets and also to 
      the new data analysis technologies like deep learning that automate data mining with high accuracy. Nevertheless data are rarely 
      shared and annotated because this implies a lot of manual and tedious work of data annotation and software packaging. We developed 
      BioImageIT an open source framework that allows to automate the data management by integrating it with data processing. Scientists 
      then only need to import their data once in BioImageIT, and then BioImageIT automatically generate and manage the metadata every time 
      an operation is performed on the data. This accelerate the data mining process since the scientist does not need any more to deal with 
      IT integration and manual analysis and annotations. BioImageIT automatically implements <a href="https://www.go-fair.org/fair-principles/">FAIR principles</a>.
      </i></p>

      <p>
      Advances in biological imaging in microscopy over the last 20 years have been accompanied by a multitude of computerized approaches for 
      the optimization, analysis, reconstruction and mining of image data. Because they are applicable to a vast field in terms of the scales of 
      living organisms, they are often adapted to one or more groups of biological problems. For most of them, their genericity is therefore 
      difficult to afford. 
      </p>
      <p>
      For more than ten years, architectures and new tools have been developed with the aim of rationalizing, organizing and making these software 
      solutions accessible to the greatest number. Such platforms have multiplied, many groups these tools as plugins (Fiji, Icy, Knime...), 
      unfortunately in various languages (java, c++, python...), imposing a rewriting of codes when it comes to interfacing them together, for example 
      to create ad-hoc workflows. Finally, some developments consist of dedicated servers associated with a database system of their own (OMERO). This more 
      integrative way of organizing, viewing and analyzing data still requires manual management or the writing of scripts which can be tedious or complex, 
      depending on the expertise of the scientist. 
      </p>
      <p> 
      At the same time, the management of these data and datasets, which today are often massive, requires the scaling up of storage infrastructures and 
      computing resources. With the recent introduction of AI approaches in the field of biological imaging and in particular deep learning approaches, 
      the automation of processes and the implementation of processing pipelines must take into account all stages of the image life cycle and new human-machine 
      interactions. As such, data management and processing/analysis must also meet quality criteria ensuring the identification, accessibility and interoperability 
      of the data with their processing, storage and analysis, and finally, anticipation of future reuse, of all or part of the associated knowledge production stages. 
      This “FAIR” principles impose ethical concepts and new procedures to scientists whose research relies heavily on biological imaging, which mean today, a change 
      in paradigm for image-based production of knowledge. 
      </p>
      <p>
      BioImageIT is both an open source system to fill a current gap by integrating both management and analysis of image data, and a tool to adapt the open science 
      requirements for large image data sets. It allows data to be annotated and processed in a single framework, while the processed data are automatically annotated. 
      BioImageIT integrates existing software. Data management can thus be based on Omero, machine learning image processing can use TensorFlow, for example. 
      BioImageIT implements 4 key features:
      <ul>
        <li>
        Unify data management with Data analysis. Most of the open sources bio-image software are specialized in either data management or data analysis. Users 
        then need to write scripts or need to do a lot of manual operations to achieve both data processing and management. BioImageIT main feature allows to import 
        and tag data for each experiment. Then every single operations on data automatically generates metadata that allows to keep track of any processing or analysis 
        and then meet the <a href="https://www.go-fair.org/fair-principles/">FAIR principles</a> without any supplementary effort from the users.
        </li>  
        <li>
        Software interoperability and reusability. BioImageIT processing tools are packaged within Docker containers. Users can then create data analysis workflow with 
        software developed in any language. The processing tools and workflows packaged in Docker images are stores on public Docker repositories and can then be reused 
        by any user.
        </li> 
        <li>
        Developer friendly. BioImageIT allows a data scientist to distribute their tools easily by just packaging it in a Docker image and writing a config (or wrapper) file 
        for the tool to be recognized by BioImageIT. 
        </li> 
        <li>
        User friendly. BioImageIT is developed with 3 layers (backend plugins, python API, graphical interface). Users can then choose the level they need. Biologists may 
        prefer using the graphical interface to be guided step by step for the data management and analysis. Data analysts may prefer writing scripts with jupyter notebooks 
        using the python API. Data researcher may prefer using the docker backend to provide a standalone demo of their new processing tool.
        </li> 
      </ul>  
      </p>  
      
    -->
    <div class="bi-spacer">
    </div> 
    <h2>Team</h2> 

    <div class="row">

    <div class="col-md-3 text-center"> 
      <a href="https://sylvainprigent.github.io">
      <img class="img-hover" src="~@/assets/team/sprigent.png" width="200" height="200" /><br />
      Sylvain Prigent</a> <br />
      BioImageIT project manager &#8211; Inria <br />
    </div>

    <div class="col-md-3 text-center"> 
      <a href="https://leconteludovic.github.io/Webpage/">
      <img class="img-hover" src="~@/assets/team/lleconte.png" width="200" height="200" /><br />
      Ludovic Leconte</a><br /> 
      Responsible of the pilot study &#8211; CNRS/Curie <br />
    </div>

    <div class="col-md-3 text-center"> 
      <a href="https://cessvala.github.io/">
      <img class="img-hover" src="~@/assets/team/cvalades.png" width="200" height="200" /><br />
      Cesar Augusto Valades-Cruz</a><br />
      Engineer &#8211; Inria<br/>
    </div>

    <div class="col-md-3 text-center"> 
      <a href="https://leomaury.github.io/">
      <img class="img-hover" src="~@/assets/team/lmaury.png" width="200" height="200" /><br />
      L&eacute;o Maury</a><br /> 
      Engineer responsible of the deployment &#8211; CNRS
    </div>

    </div>
    <div class="row justify-content-md-center">

    <div class="col-md-3 text-center"> 
      <a href="https://science.curie.fr/members/salamero-jean-phd/">
      <img class="img-hover" src="~@/assets/team/jsalamero.png" width="200" height="200" /><br />
      Jean Salamero</a><br /> 
      Head of STED research team &#8211; CNRS/Curie
    </div>

    <div class="col-md-3 text-center"> 
      <a href="https://team.inria.fr/serpico/team-members/charles-kervrann-2/">
      <img class="img-hover" src="~@/assets/team/ckervrann.png" width="200" height="200" /><br />
      Charles Kervrann</a><br /> 
      Head of Serpico research team &#8211; Inria<br />
    </div>

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
  name: 'AboutPage',
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

.img-hover:hover {
    transform:scale(1.03);
    transition: all 0.5s ease;
}
</style>
