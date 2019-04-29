<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <h1>sculptures</h1>
        <hr><br><br>
        <alert :message=message v-if="showMessage"></alert>
        <button type="button" class="btn btn-success btn-sm" v-b-modal.sculpture-modal>Add sculpture</button>
        <br><br>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Targets</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(sculpture, index) in sculptures" :key="index">
              <td>{{ sculpture.name }}</td>
              <td>{{ sculpture.target_frequencies }}</td>
              <td>
                <button
                        type="button"
                        class="btn btn-warning btn-sm"
                        v-b-modal.sculpture-update-modal
                        @click="editSculpture(sculpture)">
                    Update
                </button>
                <button
                        type="button"
                        class="btn btn-danger btn-sm"
                        @click="onDeleteSculpture(sculpture)">
                    Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <b-modal ref="addSculptureModal"
             id="sculpture-modal"
             name="Add a new sculpture"
             hide-footer>
      <b-form @submit="onSubmit" @reset="onReset" class="w-100">
      <b-form-group id="form-name-group"
                    label="Name:"
                    label-for="form-name-input">
          <b-form-input id="form-name-input"
                        type="text"
                        v-model="addSculptureForm.name"
                        required
                        placeholder="Enter name">
          </b-form-input>
        </b-form-group>
        <b-form-group id="form-target_frequencies-group"
                      label="Targets:"
                      label-for="form-target_frequencies-input">
            <b-form-input id="form-target_frequencies-input"
                          type="text"
                          v-model="addSculptureForm.target_frequencies"
                          required
                          placeholder="Enter target_frequencies">
            </b-form-input>
          </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-modal>
    <b-modal ref="editSculptureModal"
             id="sculpture-update-modal"
             name="Update"
             hide-footer>
      <b-form @submit="onSubmitUpdate" @reset="onResetUpdate" class="w-100">
      <b-form-group id="form-name-edit-group"
                    label="Name:"
                    label-for="form-name-edit-input">
          <b-form-input id="form-name-edit-input"
                        type="text"
                        v-model="editForm.name"
                        required
                        placeholder="Enter name">
          </b-form-input>
        </b-form-group>
        <b-form-group id="form-target_frequencies-edit-group"
                      label="Targets:"
                      label-for="form-target_frequencies-edit-input">
            <b-form-input id="form-target_frequencies-edit-input"
                          type="text"
                          v-model="editForm.target_frequencies"
                          required
                          placeholder="Enter target_frequencies">
            </b-form-input>
          </b-form-group>
        <b-button type="submit" variant="primary">Update</b-button>
        <b-button type="reset" variant="danger">Cancel</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
import Alert from './Alert'

export default {
  data () {
    return {
      sculptures: [],
      addSculptureForm: {
        name: '',
        target_frequencies: ''
      },
      editForm: {
        id: '',
        name: '',
        target_frequencies: ''
      },
      message: '',
      showMessage: false
    }
  },
  components: {
    alert: Alert
  },
  methods: {
    getSculptures () {
      const path = 'http://192.168.99.100:5000/sculptures'
      axios.get(path)
        .then((res) => {
          this.sculptures = res.data.sculptures
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error)
        })
    },
    addSculpture (payload) {
      const path = 'http://192.168.99.100:5000/sculptures'
      axios.post(path, payload)
        .then(() => {
          this.getSculptures()
          this.message = 'sculpture added!'
          this.showMessage = true
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error)
          this.getSculptures()
        })
    },
    updateSculpture (payload, sculptureID) {
      const path = `http://192.168.99.100:5000/sculptures/${sculptureID}`
      axios.put(path, payload)
        .then(() => {
          this.getSculptures()
          this.message = 'sculpture updated!'
          this.showMessage = true
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error)
          this.getSculptures()
        })
    },
    removeSculpture (sculptureID) {
      const path = `http://192.168.99.100:5000/sculptures/${sculptureID}`
      axios.delete(path)
        .then(() => {
          this.getSculptures()
          this.message = 'sculpture removed!'
          this.showMessage = true
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error)
          this.getSculptures()
        })
    },
    initForm () {
      this.addSculptureForm.name = ''
      this.addSculptureForm.target_frequencies = ''
      this.editForm.id = ''
      this.editForm.name = ''
      this.editForm.target_frequencies = ''
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.$refs.addSculptureModal.hide()
      const payload = {
        name: this.addSculptureForm.name,
        target_frequencies: (this.addSculptureForm.target_frequencies).split(',').map(Number)
      }
      this.addSculpture(payload)
      this.initForm()
    },
    onSubmitUpdate (evt) {
      evt.preventDefault()
      this.$refs.editSculptureModal.hide()
      const payload = {
        name: this.editForm.name,
        target_frequencies: (this.editForm.target_frequencies).split(',').map(Number)
      }
      this.updateSculpture(payload, this.editForm.id)
    },
    onReset (evt) {
      evt.preventDefault()
      this.$refs.addSculptureModal.hide()
      this.initForm()
    },
    onResetUpdate (evt) {
      evt.preventDefault()
      this.$refs.editSculptureModal.hide()
      this.initForm()
      this.getSculptures()
    },
    onDeleteSculpture (sculpture) {
      this.removeSculpture(sculpture.id)
    },
    editSculpture (sculpture) {
      this.editForm = sculpture
    }
  },
  created () {
    this.getSculptures()
  }
}
</script>
