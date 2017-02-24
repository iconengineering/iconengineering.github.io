---
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

## Colorado Water Conservation Board Links

- **Boulder Creek Master Plan**
  - [Community Comments]({{base}}/project/boulder-creek/community-comments.html){:target="_blank"}
  - [Firebase DB](https://bouldercrk-community.firebaseio.com/){:target="_blank"}

- [**Greeley Master Plan**]({{base}}/greeley/ngd-map/){:target="_blank"}

- [**Milliken Stormwater Master Plan**]({{base}}/project/milliken/milliken-stormwater-master-plan.htm){:target="_blank"}

- **High Prairie Farms Metro District**
  - [Data Collection]({{base}}/project/hpfmd/){:target="_blank"}
  - [Data Inventory]({{base}}/project/hpfmd/results/){:target="_blank"}

- **Fort Collins**
  - [Old Town]({{base}}/fort-collins/old-town-map){:target="_blank"}

- **City of Boulder**
  - [Skunk, Bluebell, King]({{base}}/boulder/sbk-map){:target="_blank"}
  - [Palo Park]({{base}}/boulder/palopark-map){:target="_blank"}
