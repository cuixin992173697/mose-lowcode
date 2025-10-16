<template>
  <div class="editor-layout">
    <!-- 顶部操作栏 -->
    <header class="editor-layout__top">
      <slot name="top" />
    </header>

    <!-- 三栏主区域 -->
    <div class="editor-layout__body">
      <aside class="editor-layout__left">
        <slot name="left" />
      </aside>

      <main class="editor-layout__center">
        <slot name="center" />
      </main>

      <aside class="editor-layout__right">
        <slot name="right" />
      </aside>
    </div>
  </div>
</template>

<style scoped>
.editor-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* 顶部区域 */
.editor-layout__top {
  height: 56px;
  padding: 0 16px;
	border-bottom: 1px solid #e5e5e5;
  background: #fff;
}

/* 主体三栏区域 */
.editor-layout__body {
  flex: 1;
  display: flex;
  flex-direction: row;
}

.editor-layout__left {
  border-right: 1px solid #e5e5e5;
  overflow-y: auto;
  width: 200px;
  background: #fff;
}

.editor-layout__center {
	flex: 1;
	overflow: auto;
}

.editor-layout__right {
  background: #fff;
  border-left: 1px solid #e5e5e5;
  overflow-y: auto;
  width: 320px;
  min-width: 320px;
}
</style>
