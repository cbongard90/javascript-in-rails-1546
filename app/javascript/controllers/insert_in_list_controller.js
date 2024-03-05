import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ["items", "form"]

  connect() {
    console.log(this.element);
    console.log(this.itemsTarget);
    console.log(this.formTarget);
  }

  send(event) {
    event.preventDefault()
    console.log("Following the AJAX route");

    // send the data
    fetch(this.formTarget.action, {
      method: "POST",
      headers: {
        "Accept": "application/json"
      },
      body: new FormData(this.formTarget)
    })
      .then(response => response.json())
      .then((data) => {
        // check if the components are present
        if (data.inserted_item) {
          // insert in the list
          this.itemsTarget.insertAdjacentHTML("beforeend", data.inserted_item)
        }

        this.formTarget.outerHTML = data.form
      })


  }
}
