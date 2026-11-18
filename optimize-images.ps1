Add-Type -AssemblyName System.Drawing

function Optimize-Image {
    param(
        [string]$SourcePath,
        [string]$DestPath,
        [int]$MaxWidth,
        [int]$MaxHeight,
        [int]$Quality = 80
    )

    try {
        $image = [System.Drawing.Image]::FromFile($SourcePath)
        $originalWidth = $image.Width
        $originalHeight = $image.Height

        $ratioX = $MaxWidth / $originalWidth
        $ratioY = $MaxHeight / $originalHeight
        $ratio = [Math]::Min($ratioX, $ratioY)

        if ($ratio -ge 1) {
            $newWidth = $originalWidth
            $newHeight = $originalHeight
        } else {
            $newWidth = [int]($originalWidth * $ratio)
            $newHeight = [int]($originalHeight * $ratio)
        }

        $resized = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $graphics = [System.Drawing.Graphics]::FromImage($resized)
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.DrawImage($image, 0, 0, $newWidth, $newHeight)
        $graphics.Dispose()

        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $Quality)
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }

        $destDir = Split-Path $DestPath -Parent
        if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }

        $resized.Save($DestPath, $codec, $encoderParams)
        $resized.Dispose()
        $image.Dispose()

        $originalSize = (Get-Item $SourcePath).Length / 1KB
        $newSize = (Get-Item $DestPath).Length / 1KB
        Write-Host ("Optimized: {0} -> {1} ({2:N0}KB -> {3:N0}KB, {4}x{5} -> {6}x{7})" -f $SourcePath, $DestPath, $originalSize, $newSize, $originalWidth, $originalHeight, $newWidth, $newHeight)
    } catch {
        Write-Host ("Failed to optimize {0}: {1}" -f $SourcePath, $_.Exception.Message)
    }
}

$webSource = "G:\Codex\2026-04-30\kya-tum-mujhe-pahchante-ho\Shivakali64Yogini-NativeApp\web-source\assets"
$wwwAssets = "G:\Codex\2026-04-30\kya-tum-mujhe-pahchante-ho\Shivakali64Yogini-NativeApp\www\assets"

$menuIcons = @("mandir.png", "kali.png", "shiv.png", "mahavidya.png", "yogini.png", "puja.png", "sadhana.png", "stotra.png", "donation.png", "events.png", "gallery.png", "books.png", "panchang.png")
foreach ($icon in $menuIcons) {
    $src = Join-Path $webSource $icon
    $dest = Join-Path $wwwAssets ($icon -replace '\.png$', '.jpg')
    if (Test-Path $src) {
        Optimize-Image -SourcePath $src -DestPath $dest -MaxWidth 200 -MaxHeight 200 -Quality 75
    }
}

$heroSrc = Join-Path $webSource "shivakali-hero.png"
$heroDest = Join-Path $wwwAssets "shivakali-hero.jpg"
if (Test-Path $heroSrc) {
    Optimize-Image -SourcePath $heroSrc -DestPath $heroDest -MaxWidth 800 -MaxHeight 600 -Quality 80
}

$nirmanSrc = Join-Path $webSource "nirman"
$nirmanDest = Join-Path $wwwAssets "nirman"
Get-ChildItem $nirmanSrc -Filter "*.jpeg" | ForEach-Object {
    $dest = Join-Path $nirmanDest ($_.BaseName + ".jpg")
    Optimize-Image -SourcePath $_.FullName -DestPath $dest -MaxWidth 800 -MaxHeight 600 -Quality 80
}

Write-Host "Optimization complete!"