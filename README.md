# 独立仓库模板

```bash
# 安装依赖
pnpm i
# 先同步包
pnpm sync --plugins action-bulk-edit\,action-bulk-update\,action-custom-request\,action-duplicate\,action-export\,action-import\,action-print\,block-calendar\,block-charts\,block-gantt\,block-kanban\,block-presentation\,field-china-region\,field-formula\,field-sequence\,field-encryption\,log-viewer\,otp\,full-text-search\,password-policy\,auth-pages\,manual-notification\,adapter-bullmq\,adapter-red-node\,adapter-remix\,api-keys\,audit-logs\,auth-cas\,auth-dingtalk\,auth-lark\,auth-oidc\,auth-saml\,auth-sms\,auth-wechat\,auth-wecom\,block-comments\,block-map\,block-step-form\,data-source-common\,demos-game-runesweeper\,devtools\,field-markdown-vditor\,field-snapshot\,i18n-editor\,multi-app-share-collection\,online-user\,simple-cms\,sub-accounts\,theme-editor\,workflow-approval\,ai-chat\,department\,workflow-analysis\,api-logs\,ocr-convert\,text-copy
# 和主仓库一致用法
```

更新的时候可以执行 
```bash
# 更新依赖到最新的版本
npx taze -r --ignore-paths plugins
# 更新插件（待优化）
pnpm sync --plugins action-bulk-edit\,action-bulk-update\,action-custom-request\,action-duplicate\,action-export\,action-import\,action-print\,block-calendar\,block-charts\,block-gantt\,block-kanban\,block-presentation\,field-china-region\,field-formula\,field-sequence\,field-encryption\,log-viewer\,otp\,full-text-search\,password-policy\,auth-pages\,manual-notification\,adapter-bullmq\,adapter-red-node\,adapter-remix\,api-keys\,audit-logs\,auth-cas\,auth-dingtalk\,auth-lark\,auth-oidc\,auth-saml\,auth-sms\,auth-wechat\,auth-wecom\,block-comments\,block-map\,block-step-form\,data-source-common\,demos-game-runesweeper\,devtools\,field-markdown-vditor\,field-snapshot\,i18n-editor\,multi-app-share-collection\,online-user\,simple-cms\,sub-accounts\,theme-editor\,workflow-approval\,ai-chat\,department\,workflow-analysis\,api-logs\,ocr-convert\,text-copy
```
