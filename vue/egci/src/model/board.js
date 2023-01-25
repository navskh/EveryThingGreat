/**
 * 0. 글ID
  1. 글 제목
  2. 글 내용
  3. 카테고리
 */
export class BoardModel {
  constructor({ idx, title, content, category, author }) {
    this.idx = idx;
    this.title = title ?? "";
    this.content = content ?? "";
    this.category = category ?? "";
    this.author = author ?? "";
  }
}
