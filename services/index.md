---
title: Our Services
layout: page
extra-js:
  - //cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js
  - ../assets/js/services-slides.js
extra-css:
  - //cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css
  - //cdn.jsdelivr.net/jquery.slick/1.6.0/slick-theme.css
---

{% assign base = '' %}
{% assign depth = page.url | split: '/' | size | minus: 0 %}
{% if    depth <= 1 %}{% assign base = '.' %}
{% elsif depth == 2 %}{% assign base = '..' %}
{% elsif depth == 3 %}{% assign base = '../..' %}
{% elsif depth == 4 %}{% assign base = '../../..' %}
{% elsif depth == 5 %}{% assign base = '../../../..' %}
{% elsif depth == 6 %}{% assign base = '../../../../..' %}
{% elsif depth == 7 %}{% assign base = '../../../../../..' %}{% endif %}

<section>
  <ul class="actions fit small">
    <li><a href="#stormwater-design" class="button fit small special">Stormwater</a></li>
    <li><a href="#stream-restoration" class="button fit small">Restoration</a></li>
    <li><a href="#mitigation-master-planning" class="button fit small special">Mitigation</a></li>
  </ul>
  <ul class="actions fit small">  
    <li><a href="#floodplain-analysis" class="button fit small">Floodplains</a></li>
    <li><a href="#roadway-design-and-multi-modal-transportation" class="button fit small special">Roadways</a></li>
    <li><a href="#parks--recreation" class="button fit small">Parks</a></li>
    <li><a href="#gis-and-web-based-interfacing" class="button fit small special">Geospatial</a></li>
  </ul>
</section>

## Stormwater Design

ICON has established long term contracts with many Front Range municipalities to
complete drainage related design improvements. Many of our projects have been
recognized by regional and national organizations for engineering excellence.
Our projects have been selected twice by the Colorado Association of Stormwater
and Floodplain Managers (CASFM) for Grand Awards with an additional six Honor
Awards. Several of our projects have been tested by major flood events and have
proven capable of surviving flood flows even much greater than the design
frequency. A prime example is our work on Spring Creek in Fort Collins that
experienced a disastrous 11-inch plus storm of 1997 with minimal impact.

ICON’s design services include a full range of solutions, including open channel
and stabilization improvements, drop structure design, channel rehabilitation
and wetlands, restoration, conduits and storm sewers, water quality planning and
design, detention ponds, jurisdictional dams, and trenchless installations such
as pipe boring/jacking/tunneling improvements. Each project involves evaluation
of a full range of project solutions, project cost estimates, bid document
preparation, permitting, outreach and meeting facilitation, and meeting local
design criteria.

<div class="row">
  <div class="8u -2u 12u$(small)">
    <div class="sd-slides">
      <div class="image fit slide">
        <img src="{{base}}/images/sd-cherry-creek.jpg">
        <div class="slide_caption">Cherry Creek - City & County of Denver</div>
      </div>
      <div class="image fit slide">
        <img src="{{base}}/images/sd-spring-creek.jpg">
        <div class="slide_caption">Spring Creek - City of Fort Collins</div>
      </div>
      <div class="image fit slide">
        <img src="{{base}}/images/sd-clear-creek.jpg">
        <div class="slide_caption">Clear Creek - Adams County</div>
      </div>
      <div class="image fit slide">
        <img src="{{base}}/images/sd-divinney.jpg">
        <div class="slide_caption">Divinney Reservoir - City of Lakewood</div>
      </div>
    </div>
  </div>
</div>
<br />

## Stream Restoration

ICON expertise includes stream geomorphology, focusing on sediment transport and
natural stream design function.  Geomorphic principals are inherent to our
restoration planning and design projects.  ICON has completed several studies
and projects related to stream stability and sediment transport challenges where
restoration activities provide a balance of geomorphic design, sediment
transport, and ecological diversity.

<div class="row">
  <div class="8u -2u 12u$(small)">
    <div class="sr-slides">
      <div class="image fit slide">
        <img src="{{base}}/images/sr-kennys-1.jpg">
        <div class="slide_caption">West Fork Kenny's Run - Golden</div>
      </div>
      <div class="image fit slide">
        <img src="{{base}}/images/sr-babiyar.jpg">
        <div class="slide_caption">Babi Yar Park - City and County of Denver</div>
      </div>
      <div class="image fit slide">
      <img src="{{base}}/images/sr-kennys-2.jpg">
      <div class="slide_caption">West Fork Kenny's Run - Golden</div>
      </div>
      <div class="image fit slide">
        <img src="{{base}}/images/sr-woodie.jpg">
        <div class="slide_caption">Little Dry Creek and Woodie Hollow Park - Cherry Hills Village</div>
      </div>
      <div class="image fit slide">
        <img src="{{base}}/images/sr-kennys-3.jpg">
        <div class="slide_caption">West Fork Kenny's Run - Golden</div>
      </div>
    </div>
  </div>
</div>
<br />

## Mitigation Master Planning

ICON has vast knowledge and experience in the completion of Stormwater and
Stream Restoration Master Plans studies. In general, each study involves a wide
range of engineering tasks, including but not limited to hydrologic and
hydraulic modeling, floodplain delineation, damage assessment, geomorphology,
stream stabilization, alternatives analysis, economic analysis for benefits vs.
costs, conceptual or preliminary design presentation, and report preparation.

<div class="row">
  <div class="8u -2u 12u$(small)">
    <div class="mp-slides">
      <div class="image fit slide">
        <img src="{{base}}/images/mp-coalcreek.jpg">
        <div class="slide_caption">Upper Coal Creek Watershed</div>
      </div>
      <div class="image fit slide">
        <img src="{{base}}/images/mp-lyons.jpg">
        <div class="slide_caption">Town of Lyons</div>
      </div>
    </div>
  </div>
</div>
<br />


## Floodplain Analysis

ICON specializes in the completion of challenging floodplain delineation
projects and Flood Insurance Study (FIS) updates, including FEMA Letters of Map
Revisions (LOMRs), Conditional Letters of Map Revisions (CLOMRs) and Physical
Map Revisions (PMRs), competing assignments related to FIS updates in all of the
FEMA Region VIII states. ICON staff has experience in 2-dimensional modeling and
unsteady flow hydraulics, including use of the FLO-2D, SRH-2D and HECRAS 2D
software programs.

<div class="row">
  <div class="8u -2u 12u$(small)">
    <div class="fa-slides">
      <div class="image fit slide">
        <img src="{{base}}/images/fa-panel.jpg">
        <div class="slide_caption">FEMA LOMC Preparation and Reviews</div>
      </div>
    </div>
  </div>
</div>
<br />

## Roadway Design and Multi-Modal Transportation

ICON provides engineering expertise related to roadway design, trail systems and
construction. We are familiar with both CDOT and other local agency’s roadway
design standards including AASHTO’s Policy on Geometric Design of Highways and
Streets. Our projects have included local, collector, and arterial roadways and
state highways. We have completed many CDOT local agency projects which require
obtaining environmental, right-of-way, and utility clearances. Roadway designs
typically included associated right-of-way drawings, construction phasing and
traffic control plans, drainage design, including storm sewers, swales, and
permanent BMP’s, storm water management plans, and erosion and preparation of
sediment and control plans.

<div class="row">
  <div class="8u -2u 12u$(small)">
    <div class="rd-slides">
      <div class="image fit slide">
        <img src="{{base}}/images/rd-1.jpg">
        <div class="slide_caption">...</div>
      </div>
      <div class="image fit slide">
        <img src="{{base}}/images/rd-2.jpg">
        <div class="slide_caption">...</div>
      </div>
      <div class="image fit slide">
        <img src="{{base}}/images/rd-3.jpg">
        <div class="slide_caption">...</div>
      </div>
      <div class="image fit slide">
        <img src="{{base}}/images/rd-4.jpg">
        <div class="slide_caption">...</div>
      </div>
      <div class="image fit slide">
        <img src="{{base}}/images/rd-5.jpg">
        <div class="slide_caption">...</div>
      </div>
      <div class="image fit slide">
        <img src="{{base}}/images/rd-dahlia.jpg">
        <div class="slide_caption">...</div>
      </div>
    </div>
  </div>
</div>
<br />


## Parks & Recreation

ICON’s repertoire includes engineering design for major parks and trail
projects.  These projects often include, site and infrastructure planning, and
preliminary and final design documents, water quality and Low-Impact-Development
(LID) infrastructure.  Recent project examples include Johnson Habitat Park and
Sun Valley Community Park for the City and County of Denver.  Located along the
South Platte River and Weir Gulch. These projects are based on concepts
originally developed in the River Vision Implementation Plan (RVIP) completed by
Denver Department of Parks and Recreation and the Greenway Foundation which was
endorsed by the Denver City Council in November 2010. Both projects help return
the land to a more natural state, increase riparian habitat and wetlands, and
improve floodplain conditions. From a recreation standpoint the project provides
better connect with the riverine environments and incorporate recreation
programming specific to each site.  

<div class="row">
  <div class="8u -2u 12u$(small)">
    <div class="pr-slides">
      <div class="image fit slide">
        <img src="{{base}}/images/pr-1.jpg">
        <div class="slide_caption">Johnson Habitat Park - City and County of Denver</div>
      </div>
      <div class="image fit slide">
        <img src="{{base}}/images/pr-2.jpg">
        <div class="slide_caption">Johnson Habitat Park - City and County of Denver</div>
      </div>
      <div class="image fit slide">
        <img src="{{base}}/images/pr-3.jpg">
        <div class="slide_caption">Sun Valley Community Park - City and County of Denver</div>
      </div>
      <div class="image fit slide">
        <img src="{{base}}/images/pr-4.jpg">
        <div class="slide_caption">Clear Creek Trail - City of Wheat Ridge</div>
      </div>
    </div>
  </div>
</div>
<br />


## GIS and Web-based Interfacing

Cutting edge technology is common to ICON’s current projects and planning
studies. Data collection is often assembled with GIS attributes and seamlessly
transitions to web-based applications. ICON customizes web-based interfaces for
continued interaction by users and to make the plan both user-friendly and
easily updated. Similarly, ICON integrates new tools and techniques to outreach
and engage interested parties in our projects. For many projects, ICON will
develop custom project websites to display general project information, as well
as upcoming events, mailing list subscriptions, and web-based comment.

<div class="row">
  <div class="8u -2u 12u$(small)">
    <div class="gis-slides">
      <div class="image fit slide">
        <img src="{{base}}/images/gis-oldtown.jpg">
        <div class="slide_caption">Old Town Fort Collins</div>
      </div>
      </div>
    </div>
  </div>
</div>
<br />
