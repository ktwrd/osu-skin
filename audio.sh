#!/bin/bash
for x in $(ls --file-type *.wav);
	do
		echo "ffmpeg -i $x -af 'silenceremove=start_periods=1:start_duration=1:start_threshold=-60dB:detection=peak,aformat=dblp,areverse,silenceremove=start_periods=1:start_duration=1:start_threshold=-60dB:detection=peak,aformat=dblp,areverse' $x";
done
