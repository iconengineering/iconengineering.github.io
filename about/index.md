---
title: About ICON Engineering
layout: page
---

<!-- Content -->
Founded in January 1997, ICON Engineering, Inc. is a locally owned and operated
consulting civil engineering firm based in Centennial, Colorado. Although our
areas of service include nearly all aspects of civil engineering, we are best
known for our expertise in water resources. ICON specializes in complex
floodplain modeling and hydrologic/hydraulic analyses, development of river and
drainage master plans, stream stabilization and restoration improvements, bridge
hydraulics, and design of utility and storm water infrastructure. ICON’s
capabilities also include roadway design, land development, and the development
of geospatial and web-based solutions. ICON currently employs over 20
engineering staff with GIS, CAD, and administrative support.

## Management

<div class="box alt">
  <div class="row">
    <div class="9u">
      <div class="principal-contact">
        <span class="principal">Doug Williams, PE</span>
        <span class="small"><a href="mailto:dwilliams@iconeng.com"><i class="fa fa-envelope"></i> dwilliams@iconeng.com</a></span>
      </div>
      <p>
        With nearly 40 years of experience, Doug has a wide variety of engineering expertise in water resources planning, design and construction. He has completed numerous drainage and flood control designs ranging from less than $10,000 to over $5M in construction costs. His practical approach to problem solving has been coupled with an awareness of aesthetics that has produced facilities that are functional as well as community amenities.</p>
    </div>
    <div class="3u">
      <span class="image fit"><img src="{{base}}/images/staff/Doug.jpg" alt="" /></span>
    </div>
  </div>
</div>
<div class="box alt">
  <div class="row">
    <div class="9u">
      <div class="principal-contact">
        <span class="principal">Matt Ursetta, PE</span>
        <span class="small"><a href="mailto:mursetta@iconeng.com"><i class="fa fa-envelope"></i> mursetta@iconeng.com</a></span>
      </div>
      <p>
        Matt has over 30 years of experience in general civil engineering, including water resources, park development and design, roadway design, utility design, and development services. He has managed and designed hundreds of large, medium, and small drainage and flood control improvements throughout the state of Colorado. He also specializes in managing the completion of drawings and contract documents for drainage and flood control projects that include open channels, major storm sewer outfalls, regional detention ponds, water quality ponds, dams, hydraulics structures, and transportation/roadway systems.</p>
    </div>
    <div class="3u">
      <span class="image fit"><img src="{{base}}/images/staff/Matt.jpg" alt="" /></span>
    </div>
  </div>
</div>
<div class="box alt">
  <div class="row">
    <div class="9u">
      <div class="principal-contact">
        <span class="principal">Craig Jacobson, PE, CFM</span>
        <span class="small"><a href="mailto:cjacobson@iconeng.com"><i class="fa fa-envelope"></i> cjacobson@iconeng.com</a></span>
      </div>
      <p>Craig has 20 years of water resource engineering with an emphasis in floodplain management and hydrologic and hydraulic analyses. Craig has managed and designed a large array of stormwater improvements throughout the state of Colorado. His project experience includes steady state and two-dimensional hydraulic modeling, stormwater improvement and channel stabilization designs, channel restoration and maintenance, master planning, and construction management. He completed or managed the hydraulic analysis of hundreds of miles of floodplains for creeks and rivers along Colorado’s Front Range and western slope, in addition to projects in Wyoming and South Dakota. Craig is a Certified Floodplain Manager (CFM) through ASFPM and instructs classes with the Urban Watershed Research Institute (UWRI) regarding preparation and processing of FEMA Letters of Map Changes (LOMCs).</p>
    </div>
    <div class="3u">
      <span class="image fit"><img src="{{base}}/images/staff/Craig.jpg" alt="" /></span>
    </div>
  </div>
</div>
<div class="box alt">
  <div class="row">
    <div class="9u">
      <div class="principal-contact">
        <span class="principal">Troy Carmann, PE, CFM</span>
        <span class="small"><a href="mailto:tcarmann@iconeng.com"><i class="fa fa-envelope"></i> tcarmann@iconeng.com</a></span>
      </div>
      <p>Troy has 20 years of experience in civil engineering specializing in stormwater projects along the Front Range of his home state of Colorado. His design work includes stream restoration, channel stabilization, and flood control projects across numerous tributaries in the South Platte River Basin. Project designs have required coordination with the Army Corps of Engineers, Environmental Consultants, U.S. Fish and Wildlife Service, EPA, CDPHE, and local municipal entities. Additionally, he directs ICON’s GIS department and has been responsible for the production of countywide DFIRMs for FEMA Map Modernization projects in Colorado, South Dakota and Wyoming. Troy routinely presents this work to city councils, commissions, and boards and has made multiple presentations at national, state, and local conferences.</p>
    </div>
    <div class="3u">
      <span class="image fit"><img src="{{base}}/images/staff/Troy.jpg" alt="" /></span>
    </div>
  </div>
</div>

## Staff

<div class="row staff">
{% for employee in site.staff %}
 <div class="3u 6u$(small) -3u(small) profile">
  <span class="image fit"><img src="{{base}}/images/staff/{{ employee.photo}}" alt="" /></span>
  <strong>{{ employee.name }}</strong><br/>
  <span>{{ employee.title }}</span><br/>
  <span class="small"><a href="mailto:{{ employee.email }}"><i class="fa fa-envelope"></i> {{ employee.email }}</a></span>
  </div>
{% endfor %}
</div>
