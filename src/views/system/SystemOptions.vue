<template>
  <page-view :title="advancedOptions?'高级选项':'基础选项'">
    <template slot="extra">
      <a-button
        type="link"
        @click="advancedOptions = !advancedOptions"
      >
        切换到{{ advancedOptions?'基础选项':'高级选项' }}
      </a-button>
    </template>
    <a-row>
      <a-col :span="24">
        <div class="card-container">
          <a-tabs
            type="card"
            class="general"
            v-if="!advancedOptions"
          >
            <a-tab-pane key="general">
              <span slot="tab">
                <a-icon type="tool" />常规设置
              </span>
              <GeneralTab
                :options="options"
                @onChange="onOptionsChange"
                @onSave="onSaveOptions"
                :saving="saving"
                :errored="errored"
                @callback="errored=false"
              />
            </a-tab-pane>
            <a-tab-pane key="seo">
              <span slot="tab">
                <a-icon type="global" />SEO 设置
              </span>
              <SeoTab
                :options="options"
                @onChange="onOptionsChange"
                @onSave="onSaveOptions"
                :saving="saving"
                :errored="errored"
                @callback="errored=false"
              />
            </a-tab-pane>
            <a-tab-pane key="post">
              <span slot="tab">
                <a-icon type="form" />文章设置
              </span>
              <PostTab
                :options="options"
                @onChange="onOptionsChange"
                @onSave="onSaveOptions"
                :saving="saving"
                :errored="errored"
                @callback="errored=false"
              />
            </a-tab-pane>
            <a-tab-pane key="comment">
              <span slot="tab">
                <a-icon type="message" />评论设置
              </span>
              <CommentTab
                :options="options"
                @onChange="onOptionsChange"
                @onSave="onSaveOptions"
                :saving="saving"
                :errored="errored"
                @callback="errored=false"
              />
            </a-tab-pane>
            <a-tab-pane key="attachment">
              <span slot="tab">
                <a-icon type="picture" />附件设置
              </span>
              <AttachmentTab
                :options="options"
                @onChange="onOptionsChange"
                @onSave="onSaveOptions"
                :saving="saving"
                :errored="errored"
                @callback="errored=false"
              />
            </a-tab-pane>
            <a-tab-pane key="smtp">
              <span slot="tab">
                <a-icon type="mail" />SMTP 服务
              </span>
              <SmtpTab
                :options="options"
                @onChange="onOptionsChange"
                @onSave="onSaveOptions"
                :saving="saving"
                :errored="errored"
                @callback="errored=false"
              />
            </a-tab-pane>
            <a-tab-pane key="other">
              <span slot="tab">
                <a-icon type="align-left" />其他设置
              </span>
              <OtherTab
                :options="options"
                @onChange="onOptionsChange"
                @onSave="onSaveOptions"
                :saving="saving"
                :errored="errored"
                @callback="errored=false"
              />
            </a-tab-pane>
          </a-tabs>

          <a-tabs
            type="card"
            class="advanced"
            v-else
          >
            <a-tab-pane key="permalink">
              <span slot="tab">
                <a-icon type="link" />固定链接
              </span>
              <PermalinkTab
                :options="options"
                @onChange="onOptionsChange"
                @onSave="onSaveOptions"
                :saving="saving"
                :errored="errored"
                @callback="errored=false"
              />
            </a-tab-pane>
            <a-tab-pane key="api">
              <span slot="tab">
                <a-icon type="api" />API 设置
              </span>
              <ApiTab
                :options="options"
                @onChange="onOptionsChange"
                @onSave="onSaveOptions"
                :saving="saving"
                :errored="errored"
                @callback="errored=false"
              />
            </a-tab-pane>
            <a-tab-pane key="advanced-other">
              <span slot="tab">
                <a-icon type="align-left" />其他设置
              </span>
              <AdvancedOtherTab
                :options="options"
                @onChange="onOptionsChange"
                @onSave="onSaveOptions"
                :saving="saving"
                :errored="errored"
                @callback="errored=false"
              />
            </a-tab-pane>
          </a-tabs>
        </div>
      </a-col>
    </a-row>
  </page-view>
</template>
<script>
import { PageView } from '@/layouts'
import GeneralTab from './optiontabs/GeneralTab'
import SeoTab from './optiontabs/SeoTab'
import PostTab from './optiontabs/PostTab'
import CommentTab from './optiontabs/CommentTab'
import AttachmentTab from './optiontabs/AttachmentTab'
import SmtpTab from './optiontabs/SmtpTab'
import OtherTab from './optiontabs/OtherTab'
import PermalinkTab from './optiontabs/PermalinkTab'
import ApiTab from './optiontabs/ApiTab'
import AdvancedOtherTab from './optiontabs/AdvancedOtherTab'
import optionApi from '@/api/option'

import { mapActions } from 'vuex'
export default {
  components: {
    PageView,
    GeneralTab,
    SeoTab,
    PostTab,
    CommentTab,
    AttachmentTab,
    SmtpTab,
    OtherTab,
    PermalinkTab,
    ApiTab,
    AdvancedOtherTab,
  },
  data() {
    return {
      options: {},
      advancedOptions: false,
      saving: false,
      errored: false,
    }
  },
  created() {
    this.hanldeListOptions()
  },
  methods: {
    ...mapActions(['refreshUserCache', 'refreshOptionsCache']),
    hanldeListOptions() {
      optionApi.listAll().then((response) => {
        this.options = response.data.data
      })
    },
    onOptionsChange(val) {
      this.options = val
    },
    onSaveOptions() {
      this.saving = true
      optionApi
        .save(this.options)
        .catch(() => {
          this.errored = true
        })
        .finally(() => {
          setTimeout(() => {
            this.saving = false
          }, 400)
          this.hanldeListOptions()
          this.refreshOptionsCache()
          this.refreshUserCache()
        })
    },
  },
}
</script>
