new Vue({
  el: '#app',
  data() {
    return {
      memos: [
        {
          id: 1,
          text: 'テスト',
          date: '16-10-28',
          tags: ['タグ1', 'タグ2']
        },
        {
          id: 2,
          text: 'テスト2',
          date: '16-11-28',
          tags: ['タグ2', 'タグ3']
        }
      ]
    }
  },
  template: `
    <div>
      <editor-view @add="add"></editor-view>
      <list-view :memos="memos" @remove="remove"></list-view>
    </div>
  `,
  computed: {
    nextId() {
      return this.memos.reduce((id, memo) => {
          return id < memo.id ? memo.id : id
        }, 0) + 1
    }
  },
  methods: {
    add(newMemo) {
      newMemo.id = this.nextId
      this.memos.push(newMemo)
    },
    remove(id) {
      const index = this.memos.findIndex((memo) => {
        return memo.id === id
      })
      this.memos.splice(index, 1)
    }
  }
})
