<template>
  <div class="col-md-6">
    <div class="card">
      <div class="card-body pt-0">
        <h3 class="contact__title mb-3">Send Us a Message</h3>
        <form>
          <div class="row mb-4 gx-1">
            <div class="col form-floating">
              <input
                type="text"
                class="form-control"
                placeholder="Your First Name"
                aria-label="Your First Name"
              />
              <label for="">Your First Name</label>
            </div>
            <div class="col form-floating">
              <input
                type="text"
                class="form-control"
                placeholder="Your Last Name"
                aria-label="Your Last Name"
              />
              <label for="">Your Last Name</label>
            </div>
          </div>

          <div class="form-floating mb-4">
            <input
              type="email"
              class="form-control"
              placeholder="Email address"
            />
            <label for="">Email address</label>
          </div>
          <div class="form-floating mb-4">
            <textarea
              class="form-control"
              placeholder="Your message"
              id="floatingTextarea"
              style="height: 100px"
            ></textarea>
            <label for="floatingTextarea">Your message</label>
          </div>
          <div>
            <button type="submit" class="btn w-100 btn-primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
