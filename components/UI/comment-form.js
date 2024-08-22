import React from "react";

function CommentForm() {
  return (
    <div>
      <form method="post" className='form'>
        <div className='mainDiv'>
          <label htmlFor="name">نام و نام خانوادگی : </label>
          <input type="text" id="name" name="user_name" />
        </div>
        <div className='mainDiv'>
          <label htmlFor="mail">ایمیل : </label>
          <input type="email" id="mail" name="user_email" />
        </div>
        <div className='mainDiv'>
          <label htmlFor="msg">متن پیام : </label>
          <textarea id="msg" name="user_message"></textarea>
        </div>
        <div className="button">
          <button type="submit">ثبت دیدگاه</button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
