# 페이지 (기능 설계)

---

- **게시글** (NOTE) 작성 → (*.html 파일)로 db에 저장가능하게
    - WYSIWYG 에디터 사용
    - 다양한 플러그인 존재
    - 사용자 대충 끼워 넣기

- **게시글** (NOTE) 조회 및 **cheet sheet** 만들기 → ( cheet sheet를 게시글을 이용해서 만들기 )
    
    > **Cheet Sheet**는 게시글(NOTE)을 모아 만든 하나의 **커리큘럼**이다.
    > 
    - 게시글을 Drag 해서 하나의 자료구조를 만드는데 아래와 같은 구조 고민
        
        [[JS] 📚 드래그 앤 드롭(Drag and Drop) 기능 이해 & 구현하기](https://inpa.tistory.com/entry/%EB%93%9C%EB%9E%98%EA%B7%B8-%EC%95%A4-%EB%93%9C%EB%A1%AD-Drag-Drop-%EA%B8%B0%EB%8A%A5)
        
        1. Directed Graph
        2. Array
        3. Linked List
    - 게시글 조회는 검색 기능 구현
        - 키워드
        - 내용
        - 작성자
    
- **cheet sheet 목록 페이지**
    - Cheet Sheet 상세 페이지로 이동
    - 내가 쓴 Cheet Sheet 보기 가능

- **cheet sheet 상세 페이지**
    - 제안 받은 Cheet Sheet 조회 기능
    - 댓글 기능
    - 수정 페이지로 이동

- **cheet sheet 수정 페이지**
    - 다른 유저가 만든 Cheet Sheet 수정 제안 신청 하기