import Script from "next/script";

export default function Coffee() {
  return (
    <>
      <Script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="vmartens" data-description="Support me on Buy me a coffee!" data-color="#40DCA5" data-position="Right" data-x_margin="18" data-y_margin="18"></Script>
    </>
  );
}
