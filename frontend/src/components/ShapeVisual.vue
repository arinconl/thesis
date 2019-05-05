<script>
import { Scatter } from 'vue-chartjs'

export default {
  extends: Scatter,
  props: ['chartdata', 'data', 'options'],
  mounted () {
    this.renderScatterChart(this.chartdata, this.options)
  },
  computed: {
    chartData () {
      return this.data
    }
  },
  methods: {
    renderScatterChart (a = -1, b = -1) {
      if (a !== -1) {
        this.renderChart(this.chartdata, this.options)
      } else {
        this.renderChart(
          this.chartdata, this.options
        )
      }
    }
  },
  watch: {
    data () {
      this._data._chart.destroy()
      this.renderScatterChart()
    }
  }
}
</script>

<style>
</style>
