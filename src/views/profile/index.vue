<template>
  <div class="my-container">
    <el-row>
      <el-col :span="6">
        <el-card class="user-card">
          <template #header>
            <div class="card-header">
              <span>介绍（已升级 element-plus 正式版）</span>
            </div>
          </template>
        </el-card>
      </el-col>
      <el-col :span="18">
        <el-card>
          <el-tabs
            v-model="activeName"
            class="demo-tabs"
            @tab-click="handleClick"
          >
            <el-tab-pane label="功能" name="first">
              <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="Consistency" name="1">
                  <div>
                    Consistent with real life: in line with the process and
                    logic of real life, and comply with languages and habits
                    that the users are used to;
                  </div>
                  <div>
                    Consistent within interface: all elements should be
                    consistent, such as: design style, icons and texts, position
                    of elements, etc.
                  </div>
                </el-collapse-item>
              </el-collapse>
            </el-tab-pane>
            <el-tab-pane label="章节" name="second">章节</el-tab-pane>
            <el-tab-pane label="作者" name="third">作者</el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.my-container {
  .user-card {
    margin-right: 20px;
  }
}
</style>
