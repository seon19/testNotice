import * as NoticeRepository from './notice.repository.js';

class NoticeService {
  // 모든 게시판 가져오기
  getAllNotices = async () => {
    return await NoticeRepository.findAll(); // 저장소에서 모든 게시판 가져오기
  };

  // 특정 ID의 게시판 가져오기
  getNoticeById = async (id) => {
    return await NoticeRepository.findById(id); // ID로 게시판 가져오기
  };

  // 새 게시판 생성하기
  createNotice = async (noticeData) => {
    return await NoticeRepository.create(noticeData); // 새 게시판 데이터를 저장소로 전송
  };

  // 기존 게시판 수정하기
  updateNotice = async (id, noticeData) => {
    return await NoticeRepository.update(id, noticeData); // 저장소에서 게시판 업데이트
  };

  // 특정 ID의 게시판 삭제하기
  deleteNotice = async (id) => {
    return await NoticeRepository.delete(id); // 저장소에서 게시판 삭제
  };
}

export default NoticeService;