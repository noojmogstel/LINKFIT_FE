import {
  MessageWrapper,
  MessageSender,
  MessageContent,
  MessageTimestamp,
} from "@/components/Chat/ChatMessage.style";

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const { content, timestamp, sender } = message;

  return (
      <MessageWrapper>
        <MessageSender>{sender}</MessageSender>
        <MessageContent>{content}</MessageContent>
        {timestamp && (
            <MessageTimestamp>{new Date(timestamp).toLocaleTimeString()}</MessageTimestamp>
        )}
      </MessageWrapper>
  );
};
