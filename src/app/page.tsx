import Modal from "./components/Modal";

export default function Home() {
  return (
    <Modal title="teste" description="teste teste" open>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
    </Modal>
  );
}
