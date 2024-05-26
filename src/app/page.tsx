import { InstagramVideoForm } from "@/features/instagram/components/form";

export default function HomePage() {
  return (
    <div className="flex flex-col py-8">
      <h1 className="mb-8 text-balance text-center text-4xl font-extrabold">
        Instagram Video Downloader
      </h1>
      <section className="flex flex-col items-center justify-center gap-4">
        <InstagramVideoForm />
        <div className="mt-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Download Instagram Reels Videos
          </h2>
          <p className="mb-4">
            Download Instagram Reels Videos Easily with Ajax
          </p>
          <p>
            Introducing the Reels Downloader, now powered by Ajax, your go-to
            tool for downloading Instagram Reels videos effortlessly. Save your
            favorite Reels in MP4 format directly to your device with just a few
            simple steps. To get started, copy the Reels link from Instagram and
            paste it into the input field on ajaxdownloader.app. This
            streamlined service makes downloading Instagram Reels a breeze.
          </p>
          <h3 className="mb-2 mt-6 text-xl font-semibold">
            How to Download Instagram Reels
          </h3>
          <p>
            Follow these three simple steps to download Instagram Reels quickly
            and easily:
          </p>
          <ol className="mb-4 mt-2 list-inside list-decimal">
            <li className="mb-2">
              <strong>Copy the URL</strong>
              <ul className="ml-4 list-inside list-disc">
                <li>Open Instagram on your browser or app.</li>
                <li>Navigate to the Reel you want to download.</li>
                <li>Copy the URL of the Reel.</li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Paste the Link</strong>
              <ul className="ml-4 list-inside list-disc">
                <li>Go to ajaxdownloader.app.</li>
                <li>Paste the copied URL into the designated input field.</li>
              </ul>
            </li>
            <li>
              <strong>Download</strong>
              <ul className="ml-4 list-inside list-disc">
                <li>
                  Click the Download button to save the Reel to your device.
                </li>
              </ul>
            </li>
          </ol>
          <h3 className="mb-2 mt-6 text-xl font-semibold">
            Ajax Reels Downloader
          </h3>
          <p>
            <strong>Why Use Ajax Reels Downloader?</strong>
            <br />
            Instagram Reels allows users to create and share short, engaging
            videos with rich editing features. However, Instagram does not offer
            a direct way to download these videos. With Ajax Reels Downloader,
            you can download any Reels video across various devices, including
            PCs, tablets, and smartphones (iPhone and Android).
          </p>
          <h3 className="mb-2 mt-6 text-xl font-semibold">
            Features of Ajax Reels Downloader
          </h3>
          <ul className="mb-4 ml-4 list-inside list-disc">
            <li>
              <strong>High-Quality Downloads:</strong> Save Reels in
              high-resolution MP4 format without watermarks.
            </li>
            <li>
              <strong>Multi-Device Compatibility:</strong> Use the downloader on
              any device with a web browser—PCs, Macs, tablets, and smartphones.
            </li>
            <li>
              <strong>Fast and Free:</strong> Enjoy quick, free downloads
              without the need for registration.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
