import csv
from pytube import YouTube, Playlist
import concurrent.futures

def format_duration(seconds):
    minutes, seconds = divmod(seconds, 60)
    return f"{minutes:02d}:{seconds:02d}"

playlist_link = "https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt"

playlist = Playlist(playlist_link)

video_info_list = []

def get_video_info(url):
    video = YouTube(url)
    duration_formatted = format_duration(video.length)
    video_info = {
        "title": video.title.encode('utf-8'),
        "time": duration_formatted,
        "videolink": url,
    }
    return video_info

# Specify the CSV file name
csv_file = "video_info.csv"

# Use concurrent.futures to parallelize video info extraction
with concurrent.futures.ThreadPoolExecutor() as executor:
    video_info_list = list(executor.map(get_video_info, playlist.video_urls))

# Write the video information to the CSV file
with open(csv_file, mode='w', newline='', encoding='utf-8') as file:
    fieldnames = ["title", "time", "videolink"]
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(video_info_list)

print(f"Video information saved to {csv_file}")
