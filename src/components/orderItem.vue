<template>
  <div class="order" v-if="itemData">
    <div class="order-detail">
      <div class="order-image">
        <img :src="itemData.imgUrl" alt="">
      </div>
      <div class="order-title">
        <h5>{{itemData.title}}</h5>
        <p>院落才</p>
        <p>￥190.0</p>
      </div>
      <div class="order-assess">
        <button @click="goComment" v-if="!hasComment">评价</button>
        <button class="noComent" v-else>已评价</button>
      </div>
    </div>
    <div class="comment" v-if="isComment">
      <textarea name="" id="" v-model="commentValue"></textarea>
      <div class="start-box">
        <span :class="[ item<=light? 'activeLight' : '']" v-for="(item,index) of starts"
          :key="index" @click="lightStart(item)" class="start">☆</span>
      </div>
      <div><button @click="sumbitData">提交</button><button @click="cancelComment">取消</button></div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      starts: [1, 2, 3, 4, 5],
      isComment: false,
      light: 0,
      commentValue: '',
      hasComment: false,
    };
  },
  props: ['itemData'],
  methods: {
    goComment() {
      this.isComment = true;
    },
    cancelComment() {
      this.isComment = false;
      this.light = 0;
    },
    lightStart(index) {
      this.light = index;
    },
    sumbitData() {
      if (!this.commentValue || !this.light) return false;
      this.isComment = !this.isComment;
      this.hasComment = true;
    },
  },

};

</script>

<style scoped lang='scss'>
  .activeLight {
    color: red;
  }

  .noComent {
    background-color: #eee !important;
    color: #111!important;
  }

  .order {
    margin: 10px 0;

    padding: 0 20px;

    .order-detail {
      position: relative;
      display: flex;
      margin-bottom: 10px;

      .order-image {
        margin-right: 16px;

        img {
          width: 200px;
          height: 200px;

        }

      }

      .order-title {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      h5 {
        font-size: 30px;
        font-weight: bold;
      }

      p {
        font-size: 20px;
      }

      .order-assess {
        position: absolute;
        bottom: 20px;
        right: 30px;

        button {
          width: 100px;
          background-color: #ff0000;
          color: #fff;
          font-size: 26px;
          cursor: pointer;
        }
      }
    }

    .comment {
      textarea {
        width: 80%;
        height: 100px;
        border: 2px solid cyan;
        outline: cyan;
      }

      .start-box {
        margin: 10px 0;

        .start {
          margin: 0 4px;
          font-size: 26px;
        }
      }

      button {
        width: 100px;
        font-size: 26px;
      }
    }

  }

</style>
