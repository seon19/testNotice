import NoticeService from './notice.service.js';

// 모든 게시판 가져오기
export const getNotices = async (req, res) => {
  try { 
    const notices = await new NoticeService().getAllNotices();
    res.status(200).json(notices); // 클라이언트에 응답 전송
  } catch (err) {
    res.status(500).json({ message: "게시판을 가져오는 중 오류가 발생했습니다.", error: err.message });
  }
};

// 특정 ID의 게시판 가져오기
export const getNoticeById = async (req, res) => {
  try {
    const notice = await new NoticeService().getNoticeById(req.params.id); // ID로 게시판 가져오기
    if (!notice) {
      return res.status(404).json({ message: "해당 게시판을 찾을 수 없습니다." });
    }
    res.status(200).json(notice);
  } catch (err) {
    res.status(500).json({ message: "게시판을 가져오는 중 오류가 발생했습니다.", error: err.message });
  }
};

// 새 게시판 생성하기
export const createNotice = async (req, res) => {
  try {
    const { _id, title, content} = req.body;
    if(!_id || !title || !content) {
        throw new Error("필수 값이 입력되지 않았습니다.");
    }

    const newNotice = await new NoticeService().createNotice(req.body); // 새 게시판 생성
    res.status(201).json(newNotice);
  } catch (err) {
    res.status(500).json({ message: "게시판을 생성하는 중 오류가 발생했습니다.", error: err.message });
  }
};

// 기존 게시판 수정하기
export const updateNotice = async (req, res) => {
  try {
    const updatedNotice = await new NoticeService().updateNotice(req.params.id, req.body); // 지정한 ID의 게시판 업데이트
    if (!updatedNotice) {
      return res.status(404).json({ message: "해당 게시판을 찾을 수 없습니다." });
    }
    res.status(200).json(updatedNotice);
  } catch (err) {
    res.status(500).json({ message: "게시판을 업데이트하는 중 오류가 발생했습니다.", error: err.message });
  }
};

// 특정 ID의 게시판 삭제하기
export const deleteNotice = async (req, res) => {
  try {
    const result = await new NoticeService().deleteNotice(req.params.id); // 게시판 삭제
    if (!result) {
      return res.status(404).json({ message: "해당 게시판을 찾을 수 없습니다." });
    }
    res.status(200).json({ message: "게시판이 성공적으로 삭제되었습니다." });
  } catch (err) {
    res.status(500).json({ message: "게시판을 삭제하는 중 오류가 발생했습니다.", error: err.message });
  }
};
