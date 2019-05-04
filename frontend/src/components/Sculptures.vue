<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <h1>sculptures</h1>
        <hr><br><br>
        <alert :message=message v-if="showMessage"></alert>
        <!-- <button type="button" class="btn btn-success btn-sm" v-b-modal.sculpture-modal>Add sculpture</button> -->
        <br><br>
        <div>
          <div
            v-for="(sculpture, index) in sculptures" :key="index"
            class="card text-center"
            style="margin-bottom: 2em;">
            <div class="card-header">
              <ul class="nav nav-pills card-header-pills justify-content-end">
                <button
                        type="button"
                        class="btn btn-warning btn-sm"
                        v-b-modal.sculpture-update-modal
                        @click="editSculpture(sculpture)">
                    Update
                </button>
                <span style="width:1em"></span>
                <button
                        type="button"
                        class="btn btn-danger btn-sm"
                        @click="onDeleteSculpture(sculpture)">
                    Delete
                </button>
              </ul>
            </div>
            <div class="card-body">
              <h4 class="card-title">{{ sculpture.name }}</h4>
              <h5 class="card-title">Target Frequencies</h5>
              <p class="card-text">Frequencies: {{ sculpture.target_frequencies }}</p>
              <h5 class="card-title">Results</h5>
              <p class="card-text">Fit: {{ sculpture.results_store.fit }}</p>
              <p class="card-text">Frequencies: {{ sculpture.results_store.frequencies }}</p>
              <h6 class="card-title">Material</h6>
              <p class="card-text">Gauge {{ sculpture.material_params.gauge }}, {{ sculpture.material_params.material }} ({{ sculpture.material_params.density }} density)</p>
              <p class="card-text"> Mechanical Properties: {{ sculpture.material_params.modulus }}, {{ sculpture.material_params.ratio }}</p>
              <button
                      type="button"
                      class="btn btn-primary"
                      @click="getSculpturePetal(sculpture.id)">
                  Generate Petal
              </button>
              <button
                      type="button"
                      class="btn btn-primary"
                      @click="getSculptureFrequencies(sculpture.id)">
                  Check Frequencies
              </button>
              <button
                      type="button"
                      class="btn btn-primary"
                      @click="getSculptureOptimize(sculpture.id)">
                  Optimize Petal
              </button>
            </div>
            <div class="card-footer">
              <ul class="nav nav-pills card-header-pills justify-content-end">
                <button
                        type="button"
                        class="btn btn-secondary btn-sm"
                        @click="getSculptureDXF(sculpture.id)">
                    Download DXF
                </button>
                <span style="width:1em"></span>
                <button
                        type="button"
                        class="btn btn-secondary btn-sm"
                        @click="getSculpturePDF(sculpture.id)">
                    Download PDF
                </button>
              </ul>
            </div>
          </div>
        </div>
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
const fileDownload = require('js-file-download')
const serverHost = process.env.ROOT_API

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
      const path = `${serverHost}/sculptures`
      axios.get(path)
        .then((res) => {
          this.sculptures = res.data.sculptures
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error)
        })
    },
    getSculpturePetal (sculptureID) {
      const path = `${serverHost}/sculptures/${sculptureID}/generate_petal`
      console.log(`request: ${path}`)
      console.log(`request-type: generate_petal`)
      axios.get(path)
        .then((res) => {
          console.log('contact with petal')
          console.log(res)
          console.log('---')
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error)
        })
    },
    getSculptureFrequencies (sculptureID) {
      const path = `${serverHost}/sculptures/${sculptureID}/check_current_frequencies`
      console.log(`request: ${path}`)
      console.log(`request-type: check_current_frequencies`)
      axios.get(path)
        .then((res) => {
          console.log('contact with frequencies')
          console.log(res)
          console.log('---')
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error)
        })
    },
    getSculptureOptimize (sculptureID) {
      const path = `${serverHost}/sculptures/${sculptureID}/optimize`
      console.log(`request: ${path}`)
      console.log(`request-type: optimize`)
      axios.get(path)
        .then((res) => {
          console.log('contact with optimize')
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error)
        })
    },
    getSculptureDXF (sculptureID) {
      const path = `${serverHost}/sculptures/${sculptureID}/get_dxf`
      axios.get(path)
        .then((res) => {
          console.log('contact with dxf')
          fileDownload(res.data, 'test.dxf')
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error)
        })
    },
    getSculpturePDF (sculptureID) {
      const path = `${serverHost}/sculptures/${sculptureID}/get_pdf`
      axios.get(path)
        .then((res) => {
          console.log('contact with pdf')
          fileDownload(res.data, 'test.pdf')
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error)
        })
    },
    addSculpture (payload) {
      const path = `${serverHost}/sculptures`
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
      const path = `${serverHost}/sculptures/${sculptureID}`
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
      const path = `${serverHost}/sculptures/${sculptureID}`
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
        target_frequencies: ((this.addSculptureForm.target_frequencies).split(',').map(Number)).sort()
      }
      this.addSculpture(payload)
      this.initForm()
    },
    onSubmitUpdate (evt) {
      evt.preventDefault()
      this.$refs.editSculptureModal.hide()
      const payload = {
        name: this.editForm.name,
        target_frequencies: ((this.editForm.target_frequencies).split(',').map(Number)).sort()
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
