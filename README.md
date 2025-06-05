以下是 Git 常用命令的表格整理，方便快速查阅：

### **1. 配置相关命令**

| 命令 | 说明 |
|------|------|
| `git config --global user.name "Your Name"` | 设置全局用户名 |
| `git config --global user.email "your.email@example.com"` | 设置全局邮箱 |
| `git config --list` | 查看所有配置 |
| `git config --global core.editor "code --wait"` | 设置默认编辑器（如VSCode） |
| `git config --global alias.co checkout` | 设置命令别名（如 `co` 代替 `checkout`） |

---

### **2. 仓库操作命令**

| 命令 | 说明 |
|------|------|
| `git init` | 初始化新仓库 |
| `git clone <repository-url>` | 克隆远程仓库 |
| `git clone -b <branch-name> <repository-url>` | 克隆指定分支 |
| `git remote -v` | 查看远程仓库地址 |
| `git remote add origin <url>` | 添加远程仓库 |
| `git remote remove origin` | 移除远程仓库 |
| `git fetch` | 从远程获取最新代码（不合并） |
| `git pull` | 拉取远程代码并合并（`fetch + merge`） |
| `git push origin <branch>` | 推送本地分支到远程 |

---

### **3. 分支管理命令**

| 命令 | 说明 |
|------|------|
| `git branch` | 查看本地分支 |
| `git branch -a` | 查看所有分支（含远程） |
| `git branch <branch-name>` | 创建新分支 |
| `git checkout <branch-name>` | 切换分支 |
| `git checkout -b <new-branch>` | 创建并切换到新分支 |
| `git merge <branch-name>` | 合并指定分支到当前分支 |
| `git branch -d <branch-name>` | 删除本地分支 |
| `git push origin --delete <branch-name>` | 删除远程分支 |

---

### **4. 提交与撤销命令**

| 命令 | 说明 |
|------|------|
| `git status` | 查看文件状态 |
| `git add <file>` | 添加文件到暂存区 |
| `git add .` | 添加所有修改到暂存区 |
| `git commit -m "message"` | 提交暂存区内容 |
| `git commit --amend` | 修改最后一次提交 |
| `git reset HEAD <file>` | 撤销暂存区修改 |
| `git checkout -- <file>` | 撤销工作区修改 |
| `git restore <file>` | 恢复文件（Git 2.23+） |
| `git revert <commit-id>` | 撤销指定提交（生成新提交） |

---

### **5. 日志与版本查看**

| 命令 | 说明 |
|------|------|
| `git log` | 查看提交历史 |
| `git log --oneline` | 简洁版提交历史 |
| `git log --graph` | 图形化显示分支合并历史 |
| `git show <commit-id>` | 查看某次提交的详情 |
| `git diff` | 查看工作区与暂存区的差异 |
| `git diff --cached` | 查看暂存区与最新提交的差异 |

---

### **6. 标签管理**

| 命令 | 说明 |
|------|------|
| `git tag` | 查看所有标签 |
| `git tag v1.0.0` | 创建轻量标签 |
| `git tag -a v1.0.0 -m "Release"` | 创建附注标签 |
| `git push origin v1.0.0` | 推送标签到远程 |
| `git tag -d v1.0.0` | 删除本地标签 |
| `git push origin --delete v1.0.0` | 删除远程标签 |

---

### **7. 高级操作**

| 命令 | 说明 |
|------|------|
| `git stash` | 临时保存工作区修改 |
| `git stash pop` | 恢复最近暂存的工作 |
| `git rebase <branch>` | 变基操作（合并分支历史） |
| `git cherry-pick <commit-id>` | 选择性合并某次提交 |
| `git reflog` | 查看所有操作记录（用于恢复误删提交） |

---

### **8. 忽略文件配置**
- 在项目根目录创建 `.gitignore` 文件，添加需要忽略的文件或目录，例如：
  ```
  # 忽略所有.log文件
  *.log
  
  # 忽略node_modules目录
  node_modules/
  
  # 忽略.env环境文件
  .env
  ```

---

### **9. 常见工作流示例**
1. **日常开发流程**：
   ```bash
   git checkout main          # 切换到主分支
   git pull origin main      # 拉取最新代码
   git checkout -b feature   # 创建新分支
   git add .                 # 添加修改
   git commit -m "message"   # 提交
   git push origin feature   # 推送到远程
   ```

2. **合并分支**：
   ```bash
   git checkout main
   git merge feature
   git push origin main
   ```

---

### **10. 注意事项**
- **谨慎使用 `git reset --hard`**：会丢弃所有未提交的修改！
- **冲突解决**：合并时发生冲突需手动编辑文件，然后 `git add` 标记为已解决。
- **推送前先拉取**：避免因远程更新导致推送失败。

按此表格操作可覆盖 90% 的日常 Git 使用场景！ 🚀