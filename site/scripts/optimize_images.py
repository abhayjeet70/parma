"""Resize + convert source images into public/images/<category>/<name>-<w>.webp.
Writes src/data/images.json with dimensions. Run: python scripts/optimize_images.py <raw_dir>"""
import json, sys
from pathlib import Path
from PIL import Image, ImageOps

RAW = Path(sys.argv[1])
OUT = Path(__file__).resolve().parent.parent / "public" / "images"
MANIFEST = OUT.parent.parent / "src" / "data" / "images.json"
WIDTHS = [640, 1280, 1920]

CATEGORIES = {
    "hero": ["hero10", "hero12", "hero13", "hero14", "hero17", "hero18", "hero19",
             "heal-slide-1", "heal-slide-2", "heal-slide-3", "heal-slide-4", "heal-slide-5", "vision"],
    "inn": ["parma-inn", "tapestry1", "tapestry2", "red-room1", "red-room2", "panther1", "panther2",
            "panther3", "panther4", "panther5", "lounge1", "lounge2", "lounge3", "lounge4"],
    # aqua-experiences == heat-therapy == traditional-therapy (identical file); yoga == things-to-do
    "spa": ["spa1", "ayurveda-therapi-main", "aqua-experiences", "yoga", "beauty-main"],
    "healthcare": ["health1", "health2", "health3"],
    "team": ["nickey-singh", "thara", "prahbu", "anne", "kendra"],
    "locations": ["wineries", "golf", "pubs"],
}

manifest = {}
for cat, names in CATEGORIES.items():
    (OUT / cat).mkdir(parents=True, exist_ok=True)
    for name in names:
        src = RAW / f"{name}.jpg"
        if not src.exists():
            print("missing", src); continue
        im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
        w, h = im.size
        widths = [x for x in WIDTHS if x < w] + [min(w, WIDTHS[-1])]
        for tw in sorted(set(widths)):
            im.resize((tw, round(h * tw / w)), Image.LANCZOS).save(OUT / cat / f"{name}-{tw}.webp", "WEBP", quality=74, method=6)
        manifest[name] = {"path": f"/images/{cat}/{name}", "w": w, "h": h, "widths": sorted(set(widths)), "source": f"{name}.jpg"}

for logo in ["metal_logo", "new-logo", "new-logo-white"]:
    (OUT / "brand").mkdir(exist_ok=True)
    im = Image.open(RAW / f"{logo}.png")
    if im.width > 400:
        im = im.resize((400, round(im.height * 400 / im.width)), Image.LANCZOS)
    im.save(OUT / "brand" / f"{logo}.png", optimize=True)
    print(logo, im.size)

MANIFEST.parent.mkdir(parents=True, exist_ok=True)
MANIFEST.write_text(json.dumps(manifest, indent=1))
print(len(manifest), "images")
