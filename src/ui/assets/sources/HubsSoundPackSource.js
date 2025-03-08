import AssetManifestSource from "../AssetManifestSource";

export default class HubsSoundPackSource extends AssetManifestSource {
  constructor(editor) {
    super(editor, "Hubs Sound Pack", "https://common-assets.cyzyspace.io/hubs-sound-pack/Audio/asset-manifest.json");
  }
}
