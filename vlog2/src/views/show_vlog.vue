<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-row :gutter="20">
        <el-card class="box-card" style="margin-top: 10px">
          <div class="grid-content bg-purple">作者简介</div>
          <el-card>
            这是一个深沉的 作者
          </el-card>
        </el-card>
      </el-row>
      <el-row :gutter="20">
        <el-card class="box-card" style="margin-top: 10px">
          <div class="grid-content bg-purple">学历</div>
        </el-card>
      </el-row>
    </el-col>
    <el-col :span="12">
      <el-card class="box-card" style="margin-top: 10px">
        <div slot="header" class="clearfix">
          <span>日程安排</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <el-timeline :reverse="reverse">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp">
            <el-card>{{activity.content}}</el-card>
          </el-timeline-item>
        </el-timeline>
      </el-card>
    </el-col>

    <el-col :span="6">
      <el-card class="box-card" style="margin-top: 10px">
        <div class="grid-content bg-purple">你好</div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "show_vlog",
    data() {
      return {
        reverse: false,
        activities: [{
          content: '活动按期开始',
          timestamp: '2018-04-15'
        }, {
          content: '通过审核',
          timestamp: '2018-04-13'
        }, {
          content: '创建成功',
          timestamp: '2018-04-11'
        }, {
          content: '活动按期开始',
          timestamp: '2018-04-16'
        }, {
          content: '通过审核',
          timestamp: '2018-04-17'
        }, {
          content: '活动结束',
          timestamp: '2018-04-18'
        }]
      };
    }
  }
</script>

<style>
  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
