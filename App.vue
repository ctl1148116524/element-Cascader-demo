<!--
 * @Author: chengtianlei
 * @Date: 2023-06-12 18:32:52
 * @LastEditors: chengtianlei
 * @LastEditTime: 2023-06-12 18:34:30
 * @FilePath: \demo\src\App.vue
-->


<template>
<div @click="dialogVisible = true">dialog</div>
<el-dialog v-model="dialogVisible" title="Tips" draggable align-center center width="80%">
    <el-form :model="formInline" class="demo-form-inline">
        <el-form-item label="Approved by">
            <el-input v-model="formInline.user" placeholder="Approved by" />
        </el-form-item>
        <el-form-item label="Approved by">
            <el-cascader v-model="formInline.duty" :options="list" :props="props" @change="handleChange" />
        </el-form-item>
    </el-form>
</el-dialog>
</template>
<script setup lang="ts">
import { ref, reactive, version as vueVersion } from 'vue'
import { version as EpVersion } from 'element-plus'
import { ElementPlus } from '@element-plus/icons-vue'


const dialogVisible = ref(false)

const formInline = reactive({
    user: '',
    duty: []
})
const props = {
    multiple: true,
    label: "label",
    value: "value",
};
const handleChange = (value) => {
    console.log(value);
};
let list = ref([
    {
        value: "guide",
        label: "Guide",
        children: [
            {
                value: "disciplines",
                label: "Disciplines",
                children: [
                    {
                        value: "consistency",
                        label: "Consistency",
                    },
                    {
                        value: "feedback",
                        label: "Feedback",
                    },
                    {
                        value: "efficiency",
                        label: "Efficiency",
                    },
                    {
                        value: "controllability",
                        label: "Controllability",
                    },
                ],
            },
            {
                value: "navigation",
                label: "Navigation",
                children: [
                    {
                        value: "side nav",
                        label: "Side Navigation",
                    },
                    {
                        value: "top nav",
                        label: "Top Navigation",
                    },
                ],
            },
        ],
    },
])
</script>

