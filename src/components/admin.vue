<template>
  <div class="container">
    <h1 class="text-center mb-3">Signup requests</h1>
    <div class="row">
      <div class="col-12">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Sl.no</th>
              <th scope="col">Name</th>
              <th scope="col">Email id</th>
              <th scope="col">Branch</th>
              <th scope="col">Phone</th>
              <th scope="col">College</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Karthik</td>
              <td>Cristina@gmail.com</td>
              <td>Civil Engineering</td>
              <td>95846689585</td>
              <td>Cambridge Instityt3ee of techology</td>
              <td>
                <button type="button" class="btn btn-danger mr-2">
                  <b-icon-eye></b-icon-eye>
                </button>
                <button type="button" class="btn btn-success ml-2">
                  <b-icon-check></b-icon-check>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Dickerson",
          email: "Macdonald",
          phone: "1234567890",
          college: "citech",
          stream: "ece"
        }
      ]
    };
  }
};
</script>