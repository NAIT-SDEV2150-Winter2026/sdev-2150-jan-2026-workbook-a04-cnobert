const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">

  <button type="button" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h2 class="h6 mb-1 title"></h2>
      <small class="category"></small>
    </div>

    <p class="mb-1 small text-body-secondary description"></p>
    <small class="text-body-secondary location"></small>
  </button>
`;

class ResourceItem extends HTMLElement
{
  constructor()
  {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback()
  {
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Keep the same Bootstrap classes your static example uses
    // and keep the hooks (.title/.category/.description/.location) that your code relies on.

    this.shadowRoot.querySelector('.title').textContent =
      this.getAttribute('title');

    this.shadowRoot.querySelector('.category').textContent =
      this.getAttribute('category');

    this.shadowRoot.querySelector('.description').textContent =
      this.getAttribute('description');

    this.shadowRoot.querySelector('.location').textContent =
      this.getAttribute('location');
  }
}

customElements.define('resource-item', ResourceItem);