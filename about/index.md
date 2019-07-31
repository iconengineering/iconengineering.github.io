---
title: About ICON Engineering
layout: page
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

## Meet the Team

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
      <span class="image fit"><img src="//s3-us-west-2.amazonaws.com/iconeng/iconeng-img/staff/Matt.jpg" alt="" /></span>
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
      <span class="image fit"><img src="//s3-us-west-2.amazonaws.com/iconeng/iconeng-img/staff/Craig.jpg" alt="" /></span>
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
      <span class="image fit"><img src="//s3-us-west-2.amazonaws.com/iconeng/iconeng-img/staff/Troy.jpg" alt="" /></span>
    </div>
  </div>
</div>
<div class="box alt">
  <div class="row">
    <div class="9u">
      <div class="principal-contact">
        <span class="principal">Aaron Bousselot, PE, CFM</span>
        <span class="small"><a href="mailto:abousselot@iconeng.com"><i class="fa fa-envelope"></i> abousselot@iconeng.com</a></span>
    </div>
    <p>Aaron has 20 years of experience with civil design and project management for a wide range of stormwater, parks and trails projects. On the management side, he has led multi-disciplinary teams to successful project completion with ICON where his responsibilities have included developing project scopes and schedules, budget tracking, design support, facilitating meetings and overall coordination with the project team and stakeholders. On the engineering side, Aaron performs site evaluations and project planning, hydrologic and hydraulic analyses, comprehensive designs, specification and bid document preparation, and construction related services. Overall, his strength is in performing hydrologic and hydraulic modeling, estimating design and construction costs, environmental restoration planning, stormwater management plans, floodplain evaluations, drainage reports and master plans.</p>
  </div>
  <div class="3u">    
    <span class="image fit"><img src="//s3-us-west-2.amazonaws.com/iconeng/iconeng-img/staff/Aaron.jpg" alt="" /></span>
  </div>
</div>



<div class="row staff">
{% for employee in site.staff %}
{% assign base = '' %}
{% assign depth = page.url | split: '/' | size | minus: 0 %}
{% if    depth <= 1 %}{% assign base = '.' %}
{% elsif depth == 2 %}{% assign base = '..' %}
{% elsif depth == 3 %}{% assign base = '../..' %}
{% elsif depth == 4 %}{% assign base = '../../..' %}{% endif %}

 <div class="3u 6u$(small) -3u(small) profile">
  <span class="image fit"><img src="//s3-us-west-2.amazonaws.com/iconeng/iconeng-img/staff/{{ employee.photo }}" alt="" /></span>
  <strong>{{ employee.name }}</strong><br/>
  <span>{{ employee.title }}</span><br/>
  <span class="small"><a href="mailto:{{ employee.email }}"><i class="fa fa-envelope"></i> {{ employee.email }}</a></span>
  </div>
{% endfor %}
</div>
