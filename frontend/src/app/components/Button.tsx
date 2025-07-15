interface BaseButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
}

interface ButtonPendingProps extends BaseButtonProps {
  pending: boolean;
  pendingText: string;
}

interface ButtonNotPendingProps extends BaseButtonProps {
  pending: false;
  pendingText?: never;
}

type ButtonProps = ButtonPendingProps | ButtonNotPendingProps;

export default function Button({
  pending = false,
  pendingText,
  text,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={pending}
      className="bg-white text-black p-2 rounded-lg disabled:bg-gray-400 hover:bg-blue-300 hover:cursor-pointer"
    >
      {pending ? pendingText : text}
    </button>
  );
}
