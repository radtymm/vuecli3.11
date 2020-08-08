<template>
  <div class="about">
    <mu-appbar style="width: 100%;">
      <mu-button icon slot="left">
        asd
      </mu-button>
      Title
      <mu-button flat slot="right">LOGIN</mu-button>
    </mu-appbar>
    <mu-container>
      <mu-flex align-items="center" style="padding-bottom: 8px;">
        <span style="margin-right: 16px;">Label Position:</span>
        <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="top" label="Top"></mu-radio>
        <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="left" label="Left"></mu-radio>
        <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="right" label="Right"></mu-radio>
      </mu-flex>
      <mu-form ref="form" :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
        <mu-form-item label="用户名" help-text="帮助文字" prop="username" :rules="usernameRules">
          <mu-text-field v-model="form.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="Input" prop="input">
          <mu-text-field v-model="form.input"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="select" label="Select">
          <mu-select v-model="form.select">
            <mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
          </mu-select>
        </mu-form-item>
        <mu-form-item prop="date" label="Date Time">
          <mu-date-input v-model="form.date" type="dateTime" actions></mu-date-input>
        </mu-form-item>
        <mu-form-item prop="radio" label="Radio">
          <mu-radio v-model="form.radio" value="male" label="Male"></mu-radio>
          <mu-radio v-model="form.radio" value="female" label="Female"></mu-radio>
        </mu-form-item>
        <mu-form-item prop="checkbox" label="Checkbox">
          <mu-checkbox v-model="form.checkbox" value="eat" label="Eat"></mu-checkbox>
          <mu-checkbox v-model="form.checkbox" value="sleep" label="Sleep"></mu-checkbox>
          <mu-checkbox v-model="form.checkbox" value="run" label="Run"></mu-checkbox>
          <mu-checkbox v-model="form.checkbox" value="movie" label="Movie"></mu-checkbox>
        </mu-form-item>
        <mu-form-item prop="switch" label="Switch">
          <mu-switch v-model="form.switch"></mu-switch>
        </mu-form-item>
        <mu-form-item prop="slider" label="Slider">
          <mu-slider v-model="form.slider"></mu-slider>
        </mu-form-item>
        <mu-form-item prop="textarea" label="Textarea">
          <mu-text-field multi-line :rows="3" :rows-max="6" v-model="form.textarea"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
  </div>
</template>


<script>
export default {
  data () {
    return {
      options: [
        'Option 1', 'Option 2', 'Option 3', 'Option 4',
        'Option 5', 'Option 6', 'Option 7', 'Option 8',
        'Option 9', 'Option 10'
      ],
      usernameRules: [
        { validate: (val) => !!val, message: '必须填写用户名'},
        { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
      ],
      labelPosition: 'top',
      form: {
        input: '',
        select: '',
        date: '',
        radio: '',
        checkbox: [],
        switch: false,
        slider: 30,
        textarea: ''
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate().then((result) => {
        console.log('form valid: ', result)
        const loading = this.$loading();
        setTimeout(() => {
          loading.close();
            this.$toast.message('hello world');
            this.$toast.success('hello world');
            this.$toast.info('hello world');
            this.$toast.warning('hello world');
            this.$toast.error('hello world');
        }, 2000)
      });
    },
    clear (){

    }
  }
};
</script>
<style>
.mu-demo-form {
  width: 100%;
  max-width: 460px;
}
</style>