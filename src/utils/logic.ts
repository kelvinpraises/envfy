// export const getDocument = async ({
//   did,
//   family,
// }: {
//   did: string;
//   family: string;
// }) => {
//   const ceramic = new CeramicClient(process.env.NEXT_PUBLIC_CERAMIC_API_URL);

//   const doc = await TileDocument.deterministic(ceramic, {
//     // Did of the tile controller.
//     controllers: [did],

//     // Deployed model aliases definition.
//     family,
//   });

//   return doc;
// };

export {};
