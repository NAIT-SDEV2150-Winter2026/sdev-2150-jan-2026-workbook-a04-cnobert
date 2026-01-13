// resource-results.js

const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">

  <section class="h-100">
    <div class="card h-100">
      <div class="card-header d-flex justify-content-between align-items-center">
        <strong>Results</strong>
        <span class="badge text-bg-secondary count"></span>
      </div>

      <div class="list-group list-group-flush results"></div>
    </div>
  </section>
`;

class ResourceResults extends HTMLElement
{
  constructor()
  {
    super();
    this.attachShadow({ mode: 'open' });

    this.resources =
    [
      {
        title: 'Peer Tutoring Centre',
        category: 'Academic',
        description: 'Drop-in tutoring and study support.',
        location: 'Building W, Room W101'
      },
      {
        title: 'Counselling Services',
        category: 'Wellness',
        description: 'Confidential mental health supports.',
        location: 'Virtual and in-person'
      },
      {
        title: 'Student Awards and Bursaries',
        category: 'Financial',
        description: 'Funding options and application help.',
        location: 'Student Services, Main Floor CAT'
      },
      {
        title: 'IT Service Desk',
        category: 'Tech',
        description: 'Account access, Wi-Fi, BYOD support.',
        location: 'Library'
      }
    ];
  }

  connectedCallback()
  {
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const list = this.shadowRoot.querySelector('.results');
    const count = this.shadowRoot.querySelector('.count');

    count.textContent = this.resources.length;

    for (const resource of this.resources)
    {
      const item = document.createElement('resource-item');

      item.setAttribute('title', resource.title);
      item.setAttribute('category', resource.category);
      item.setAttribute('description', resource.description);
      item.setAttribute('location', resource.location);

      list.appendChild(item);
    }
  }
}
customElements.define('resource-results', ResourceResults);