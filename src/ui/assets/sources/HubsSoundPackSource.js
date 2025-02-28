import AssetManifestSource from "../AssetManifestSource";

export default class HubsSoundPackSource extends AssetManifestSource {
  constructor(editor) {
    super(editor, "Hubs Sound Pack", "https://cyzyspace-public-assets.s3.us-east-1.amazonaws.com/spoke/asset-manifest.json");
  }
}
