<template>
  <div class="forum">
    <header>
      <h5>论坛精选</h5>
      <a class="btn">
        <button class="btn-go">前往论坛  <i>></i></button>
      </a>
    </header>
    <div class="allforum">
      <div class="forumgoods">
        <div class="forumimg">
          <img src="./images/c7bd3bd39296763ba75e4be6efe07282.webp" alt="" />
        </div>
        <h3>Smartisan OS v8.0.1 更新日志（坚果 R2）</h3>
        <p>Smartisan OS v8.0.1 已于 10 月 20 日推送给坚果 R2 用户。</p>
        <span>阅读全文 ></span>
      </div>
      <div class="forumgoods">
        <div class="forumimg">
          <img src="./images/54603ac102430ea8619bb68b8c0c33ff.webp" alt="" />
        </div>
        <h3>坚果 R2 购买及使用常见问题</h3>
        <p>你关心的各种问题~</p>
        <span>阅读全文 ></span>
      </div>
      <div class="forumgoods">
        <div class="forumimg">
          <img src="./images/c65f7de469c0ef2f1ad25661b53f184e.webp" alt="" />
        </div>
        <h3>R2体验新鲜出炉，上手两小时体验</h3>
        <p>新鲜出炉上手体验</p>
        <span>阅读全文 ></span>
      </div>
      <div class="forumgoods">
        <div class="forumimg">
          <img src="./images/5eaedbb3425ea75a0a26246588659bbd.webp" alt="" />
        </div>
        <h3>我的Smartisan手机</h3>
        <p>祝新品大卖。</p>
        <span>阅读全文 ></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Forum",
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.forum {
  margin-top: 25px;
  border: 1px solid rgba(0, 0, 0, 0.14);
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
  .allforum {
    display: flex;
    .forumgoods {
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      padding: 30px 30px 60px;
      cursor: pointer;
      box-sizing: border-box;
      position: relative;
      .forumimg {
        display: flex;
        margin: 0 auto;
        width: 244px;
        height: 154px;
        // position: relative;
        img {
          width: 100%;
          margin: 0 auto;
        }
      }
      h3 {
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        margin: 30px 0 12px;
        color: #333;
        font-size: 15px;
        font-weight: 700;
        -webkit-line-clamp: 1;
      }
      p {
        font-size: 12px;
        color: #999;
        font-weight: 400;
        line-height: 18px;
      }
      span {
        bottom: 30px;
        margin-top: 12px;
        font-size: 12px;
        font-weight: 500;
        color: #5079d9;
        position: absolute;
      }
    }
  }
  header{
    background: #fafafa;
    border-bottom: 1px solid rgba(0,0,0,.1);
    position: relative;
    h5{
        margin-left: 25px;
        font-weight: bolder;
        font-size: 18px;
        line-height: 60px;
        color: #666;
    }
    a{
        position: absolute;
        right: 10px;
        top: 0px;
        height: 60px;
        display: flex;
        align-items: center;
        cursor: pointer;
        .btn-go{
            height: 37px;
            font-weight: 700;
            border: 1px solid #e1e1e1;
            color: #666;
            font-size: 14px;
            border-radius: 4px;
            background: #fafafa;
            padding: 0 15px;
            cursor: pointer;
        }
    }
  }
}
</style>
