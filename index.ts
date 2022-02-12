class MediaFile {
  lengthInSeconds: number;
  soundVolumeInPercentage: number;
}

class VideoFile extends MediaFile {
  file: any;
}

class AudioFile extends MediaFile {
  file: any;
}

class ImageFile {
  file: any;
}

class Interval {
  startTimeInSeconds: number;
  endTimeInSeconds: number;
}

class VideoEditor {
  private _videoFile: VideoFile;
  private _exportDir: string;
  constructor(
    exportDir: string,
    videoFiles: VideoFile[],
    audioFiles: AudioFile[] = []
  ) {
    this._exportDir = exportDir;
    this._videoFile = this.mergeMedias(videoFiles, audioFiles);
  }

  /**
   * This function will merge the media files in order that's given
   * @param videoFiles A list of video files in order
   * @param audioFiles A list of audio files in order
   */
  private mergeMedias(
    videoFiles: VideoFile[],
    audioFiles: AudioFile[] = []
  ): VideoFile {}

  /**
   * This function will remove the list of interval provided in the _videoFile
   * @param splitIntervals A list of intervals that needs to be removed from the _video
   */
  public split(splitIntervals: Interval[]): VideoFile {}

  /**
   * This function will add a image overlay into _video
   * @param image image overlay file
   * @param topLeftPosition image top left position in the video frame
   * @param topRightPosition image top right position in the video frame
   * @param bottomLeftPosition image bottom left position in the video frame
   * @param bottomRightPosition image bottom right position in the video frame
   * @param startTimeInSeconds when the image display in the video
   * @param endTimeInSeconds when the image stop display
   * */
  public imageOverlay(
    image: ImageFile,
    topLeftPosition: number,
    topRightPosition: number,
    bottomLeftPosition: number,
    bottomRightPosition: number,
    startTimeInSeconds: number,
    endTimeInSeconds: number
  ): VideoFile {}
}
