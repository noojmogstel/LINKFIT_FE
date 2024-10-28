import {useEffect, useState} from "react";
import {ChattingList2} from "@/types";
import {getChattingList} from "@/api/chat/getChattingList";

export const useChattingList = () => {
  const [chattingLists2, setChattingList2] = useState<ChattingList2[]>([]);

  useEffect(() => {
    const fetchChattingList2 = async () => {
      try {
        const data = await getChattingList();
        setChattingList2(data);
      } catch (error) {
        console.error(
            '채팅 목록 데이터를 가져오는데 실패했습니다.',
            error
        );
      }
    };
    fetchChattingList2();
  }, []);

  return { chattingLists2 };
}