<template>
<div>
  <site-navbar></site-navbar>
  <div class="container">
    <div class="col-12">
      <h1>About</h1>
    </div>
    <div class="col-12">
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
      <p>
      Tutorials of BioImageIT are available at <a href="https://bioimageit.github.io/#/tutorials">https://bioimageit.github.io/#/tutorials</a> and the repositories of all the 
      available tools are available in the project: <a href="https://github.com/bioimageit">https://github.com/bioimageit</a>.
      </p>
      <p>
      In the next sections we describe the implementation of each components of BioImageIT.
      </p>  


      <h3>Data management</h3>
      <p>
      The data management in BioImageIT is designed at the experiment scale. The definition of an experiment is let to the scientist. Nevertheless, we consider here a common 
      definition of an experiment which is a series of data acquisitions to answer a specific question. For example an experiment can be “staining a set of reference samples 
      and a set of mutant samples using a specific antibody to measure if the mutant express more the targeted protein than the reference samples”.
      A BioImageIT experiment contains datasets. A dataset is a collection of data with metadata describing how these data have been created. We distinguish two types of 
      datasets. An experiment contains a single RawDataset with data from the acquisition system without any external processing. We note that an acquisition system can perform 
      data preprocessing (like super-resolution microscopy). In this case we consider these preprocessed data as raw data. An experiment can contain multiple ProcessedDatasets 
      where each ProcessedDataset contains data that are derivate from the other datasets of the experiment. All the metadata of the ProcessedDatasets are generated automatically 
      by the BioImageIT software. Data in the raw dataset are tagged with a vocabulary specific to the experiment. This vocabulary is defined by the scientists when they create 
      their experiment. If we come back to the previous example, we can tag the reference data with “type=reference” and the mutant data with “type=mutant”. It is then possible 
      using the BioImageIT interface to query, visualize and run a process in the mutant data only or the reference data only without writing a single line of code.  Figure 1 shows 
      a general scheme of the data organization within an experiment.
      </p>
      <p>
      The data management system is implemented with a plugin system in the BioImageIT core python library (https://github.com/bioimageit/bioimageit_core). By default the data 
      management is stored in a local file system and the metadata are stored in JSON files. This allows an open database readable by both humans and programs. Thanks to the 
      plugin architecture, one can connect the BioImageIT data management to an existing database like <b>Omero</b> for instance.
      </p>

      <p class="text-center">
      <img src="~@/assets/experiment.png" alt="" width="500" height="250">
      </p><p>
      <i>  
      Figure 1: Scheme of an experiment data organization. The files with extension .md.json represent the metadata. The experiment is represented as one directory 
      containing the experiment metadata (experiment.md.json) and one directory per dataset. The dataset called “data” contains the raw data, and the other dataset 
      contains the processed data obtained by successive processing algorithms. Each dataset contains both the data files and the associated metadata.   
      </i>
      </p>  

      <h3>Data processing</h3>
      <p>
      BioImageIT data processing functionalities are based in the tools packaging system developed by the <a href="https://galaxyproject.org/">Galaxy project</a>. 
      First, the source code of the tool should be in a Git repository to be able to track the versions and meet the <a href="https://www.go-fair.org/fair-principles/">FAIR principles</a>. 
      This code is then packaged in a <a href="https://www.docker.com/">Docker</a> image in order to be runnable in any computer. An additional wrapper file is associated to the 
      <a href="https://www.docker.com/">Docker</a> image. This wrapper file is a simple XML 
      file that describe the tool input, output, parameters. This wrapper file is the entry point of the tool, and all available tools in BioImageIT are listed 
      in a toolshed repository <a href="https://github.com/bioimageit/bioimageit-tools">here</a>. Figure 2 shows an example of wrapper file.
      </p>
      <p>
      The BioImageIT tools runner is implemented in the <a href="https://github.com/bioimageit/bioimageit_core">BioImageIT core python library</a>. It is implemented with a 
      plugin architecture to enable the possibility of choosing a specific backend (<a href="https://www.docker.com/">Docker</a>, <a href="https://sylabs.io/docs/">Singularity</a>…) 
      </p>

      <p class="text-center">
      <img src="~@/assets/wrapper_xml.png" alt="" width="943" height="597">
      </p><p>
      <i>  
      Figure 2: Example of a wrapper file for an image denoising algorithm called NDSafir. The wrapper main sections are: <b>requirements</b> with the address of the tool Docker container, 
      command with the command line to execute the tool, <b>inputs</b> with the description of all input data and parameter and outputs with the description of the tool outputs. Optional 
      sections like tests, <b>help</b>, and <b>citations</b> allows to add extra functionalities like unit testing, documentation, scientific references and so on.
      </i>
      </p>  


    <h3>User interfaces</h3>
    <p>
    BioImageIT is a collection of multiple tools: a data management library, a process runner and a repository of processing tools wrapped into containers.
    Depending on the scientists needs we can define three level of BioImageIT use:
    <ul>
      <li>
      <b>Low level:</b> Scientists can use the registries of tools from GitHub and write their own data management and analysis scripts. This is useful for 
      scientists who want to develop a software for a very dedicated application based on the BioImageIT components. A scientist can also install BioImageIT 
      components in container to provide a standalone demo of their own tool.
      </li>
      <li>
      <b>Intermediate level:</b> Scientists can use the python API of BioImageIT for writing high level scripts. The can be useful for scientists who prefer 
      managing their experiments using Jupyter Notebooks of for data processing scientists who wants to integrate the BioImageIT data management functionalities 
      into their own software.
      </li>
      <li>
      <b>High level:</b> Most of the experimental scientists will prefer using the desktop graphical interface to annotate, visualize, and process data without 
      writing a single line of code. Figure 3 shows an example of using BioImageIT for an image processing experimentation.  
      </li>
    </ul>
    </p>

      <p class="text-center">
      <img src="~@/assets/scheme_gui.png" alt="" width="943" height="500">
      </p><p>
      <i>  
      Figure 3: Use case for image analysis. First (1) scientists import their raw data in BioImageIT and then (2) annotate the data. Then comes the data processing 
      steps. (3) scientists can choose dedicated tools from the tools database. In this use case we use deconvolution. The deconvolution is performed on the raw dataset. 
      (4) Scientists can visualize the generated processed dataset where annotations are automatically generated. (5) Scientists can visualize individual results. In this 
      example the deconvolved images. Scientists can then repeat this process for any data processing. For example (6)(7)(8) for segmentation of the images from the 
      deconvoluted dataset. 
      </i>
      </p>  


    <h3>Funding</h3>

      <p>BioImageIT is a project supported by France-BioImaging</p>
      <p><a href="https://france-bioimaging.org/"><img src="~@/assets/icons/france-bioimaging.png" alt="" width="300" height="87"></a>
      
      <h2>Team</h2>
      <ul>
        Sylvain Prigent: BioImageIT project manager<br />
        <a href="https://team.inria.fr/serpico/team-members/charles-kervrann-2/">Charles Kervrann</a>: Head of Serpico research team &#8211; Inria<br />
        <a href="https://science.curie.fr/members/salamero-jean-phd/">Jean Salamero</a>: Head of STED research team &#8211; CNRS/Curie
      </ul>
    </div>
  </div>  
</div>
</template>

<script>
import SiteNavbar from './SiteNavbar'

export default {
  name: 'AboutPage',
  props: {
  },
  methods: {
  },
  components: {
    SiteNavbar
  }
}
</script>

<style scoped>

</style>