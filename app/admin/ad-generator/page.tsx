"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { toPng } from "html-to-image";
import downloadjs from "downloadjs";
import {
  Type,
  Image as ImageIcon,
  Upload,
  Download,
  LayoutPanelLeft,
  Package,
} from "lucide-react";
import { AdCanvas } from "./AdCanvas";
import { AD_PRESETS, getPresetById } from "@/lib/ad-presets";
import { NEIGHBORHOODS, getNeighborhoodById, getNeighborhoodHeadline } from "@/lib/neighborhoods";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2574&auto=format&fit=crop";

export default function AdGeneratorPage() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const canvasRefSquare = useRef<HTMLDivElement>(null);
  const canvasRef45 = useRef<HTMLDivElement>(null);
  const canvasRefHorizontal = useRef<HTMLDivElement>(null);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [selectedNeighborhoodId, setSelectedNeighborhoodId] = useState("");
  const [footerLine, setFooterLine] = useState("");
  const [title, setTitle] = useState("MIWESU");
  const [subheading, setSubheading] = useState("PREMIUM FIRE WOOD");
  const [spec1, setSpec1] = useState("50 BAGS");
  const [spec2, setSpec2] = useState("R25/bag");
  const [spec3, setSpec3] = useState("Free Delivery");
  const [spec4, setSpec4] = useState("Gauteng Only");
  const [phone, setPhone] = useState("073 030 9679");
  const [phone2, setPhone2] = useState("072 717 2572");
  const [imageUrl, setImageUrl] = useState<string | null>(DEFAULT_IMAGE);
  const [imageUrlSquare, setImageUrlSquare] = useState<string | null>(DEFAULT_IMAGE);
  const [imageZoomVertical, setImageZoomVertical] = useState(1);
  const [imagePositionVertical, setImagePositionVertical] = useState(0);
  const [imagePositionVerticalX, setImagePositionVerticalX] = useState(0);
  const [imageZoomSquare, setImageZoomSquare] = useState(1);
  const [imagePositionSquare, setImagePositionSquare] = useState(0);
  const [imagePositionSquareX, setImagePositionSquareX] = useState(0);
  const [imageUrlHorizontal, setImageUrlHorizontal] = useState<string | null>(DEFAULT_IMAGE);
  const [imageZoomHorizontal, setImageZoomHorizontal] = useState(1);
  const [imagePositionHorizontalX, setImagePositionHorizontalX] = useState(0);
  const [imagePositionHorizontalY, setImagePositionHorizontalY] = useState(0);
  const [exporting, setExporting] = useState(false);
  const [exportingSquare, setExportingSquare] = useState(false);
  const [exporting45, setExporting45] = useState(false);
  const [exportingHorizontal, setExportingHorizontal] = useState(false);

  const applyPreset = useCallback((presetId: string) => {
    const preset = getPresetById(presetId);
    setTitle(preset.title);
    setSubheading(preset.subheading);
    setSpec1(preset.spec1);
    setSpec2(preset.spec2);
    setSpec3(preset.spec3);
    setSpec4(preset.spec4);
    setFooterLine(preset.footerLine);
  }, []);

  useEffect(() => {
    applyPreset(selectedProductId);
  }, [selectedProductId, applyPreset]);

  const neighborhoodLine = selectedNeighborhoodId
    ? (() => {
        const n = getNeighborhoodById(selectedNeighborhoodId);
        return n ? getNeighborhoodHeadline(n) : "";
      })()
    : "";

  const handleImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => setImageUrl(reader.result as string);
      reader.readAsDataURL(file);
    },
    []
  );

  const handleImageUploadSquare = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => setImageUrlSquare(reader.result as string);
      reader.readAsDataURL(file);
    },
    []
  );

  const handleImageUploadHorizontal = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => setImageUrlHorizontal(reader.result as string);
      reader.readAsDataURL(file);
    },
    []
  );

  const handleExport = useCallback(async () => {
    if (!canvasRef.current) return;
    setExporting(true);
    try {
      // Wait for layout/paint so export matches what's on screen
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      const dataUrl = await toPng(canvasRef.current, {
        width: 450,
        height: 800,
        pixelRatio: 2.4, // 450*2.4 = 1080, 800*2.4 = 1920
        backgroundColor: "#000000",
        cacheBust: true,
      });
      downloadjs(
        dataUrl,
        `miwesu-ad-vertical-${Date.now()}.png`,
        "image/png"
      );
    } catch (err) {
      console.error(err);
      alert("Export failed. Try again.");
    } finally {
      setExporting(false);
    }
  }, []);

  const handleExportSquare = useCallback(async () => {
    if (!canvasRefSquare.current) return;
    setExportingSquare(true);
    try {
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      const dataUrl = await toPng(canvasRefSquare.current, {
        width: 450,
        height: 450,
        pixelRatio: 2.4, // 450*2.4 = 1080
        backgroundColor: "#000000",
        cacheBust: true,
      });
      downloadjs(
        dataUrl,
        `miwesu-ad-square-${Date.now()}.png`,
        "image/png"
      );
    } catch (err) {
      console.error(err);
      alert("Export failed. Try again.");
    } finally {
      setExportingSquare(false);
    }
  }, []);

  const handleExport45 = useCallback(async () => {
    if (!canvasRef45.current) return;
    setExporting45(true);
    try {
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      const dataUrl = await toPng(canvasRef45.current, {
        width: 360,
        height: 450,
        pixelRatio: 3, // 1080×1350
        backgroundColor: "#000000",
        cacheBust: true,
      });
      downloadjs(dataUrl, `miwesu-ad-4x5-${Date.now()}.png`, "image/png");
    } catch (err) {
      console.error(err);
      alert("Export failed. Try again.");
    } finally {
      setExporting45(false);
    }
  }, []);

  const handleExportHorizontal = useCallback(async () => {
    if (!canvasRefHorizontal.current) return;
    setExportingHorizontal(true);
    try {
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      const dataUrl = await toPng(canvasRefHorizontal.current, {
        width: 600,
        height: 314,
        pixelRatio: 2, // 1200×628 (1.91:1)
        backgroundColor: "#000000",
        cacheBust: true,
      });
      downloadjs(dataUrl, `miwesu-ad-horizontal-${Date.now()}.png`, "image/png");
    } catch (err) {
      console.error(err);
      alert("Export failed. Try again.");
    } finally {
      setExportingHorizontal(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-void text-white flex flex-col">
      <header className="border-b border-tungsten px-6 py-4">
        <h1 className="text-lg font-semibold tracking-wide text-zinc-300">
          Ad Generator
        </h1>
        <p className="text-sm text-zinc-500 mt-0.5">
          Internal tool · 9:16 · 4:5 · 1:1 · 1.91:1
        </p>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row gap-6 p-6 overflow-auto">
        {/* Left: Control panel */}
        <aside className="w-full lg:w-80 flex-shrink-0 space-y-6">
          <div className="rounded-3xl bg-titanium border border-tungsten p-5 space-y-4">
            <div className="flex items-center gap-2 text-zinc-400 text-sm uppercase tracking-widest-tech">
              <Package className="w-4 h-4" />
              Product
            </div>
            <label className="block">
              <span className="text-xs text-zinc-500 block mb-1">Template for</span>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full rounded-xl bg-void border border-tungsten px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-500/50"
              >
                {AD_PRESETS.map((p) => (
                  <option key={p.id || "custom"} value={p.id}>
                    {p.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-xs text-zinc-500 block mb-1">Neighborhood (for “We deliver here” line)</span>
              <select
                value={selectedNeighborhoodId}
                onChange={(e) => setSelectedNeighborhoodId(e.target.value)}
                className="w-full rounded-xl bg-void border border-tungsten px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-500/50"
              >
                <option value="">No neighborhood</option>
                {NEIGHBORHOODS.map((n) => (
                  <option key={n.id} value={n.id}>
                    {n.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="rounded-3xl bg-titanium border border-tungsten p-5 space-y-4">
            <div className="flex items-center gap-2 text-zinc-400 text-sm uppercase tracking-widest-tech">
              <Type className="w-4 h-4" />
              Copy
            </div>
            <label className="block">
              <span className="text-xs text-zinc-500 block mb-1">Title</span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl bg-void border border-tungsten px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                placeholder="MIWESU"
              />
            </label>
            <label className="block">
              <span className="text-xs text-zinc-500 block mb-1">Subheading</span>
              <input
                type="text"
                value={subheading}
                onChange={(e) => setSubheading(e.target.value)}
                className="w-full rounded-xl bg-void border border-tungsten px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                placeholder="PREMIUM FIRE WOOD"
              />
            </label>
            <label className="block">
              <span className="text-xs text-zinc-500 block mb-1">Phone 1</span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl bg-void border border-tungsten px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                placeholder="073 030 9679"
              />
            </label>
            <label className="block">
              <span className="text-xs text-zinc-500 block mb-1">Phone 2</span>
              <input
                type="text"
                value={phone2}
                onChange={(e) => setPhone2(e.target.value)}
                className="w-full rounded-xl bg-void border border-tungsten px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                placeholder="072 717 2572"
              />
            </label>
          </div>

          <div className="rounded-3xl bg-titanium border border-tungsten p-5 space-y-4">
            <div className="flex items-center gap-2 text-zinc-400 text-sm uppercase tracking-widest-tech">
              <LayoutPanelLeft className="w-4 h-4" />
              Specs (bento)
            </div>
            <label className="block">
              <span className="text-xs text-zinc-500 block mb-1">Spec 1</span>
              <input
                type="text"
                value={spec1}
                onChange={(e) => setSpec1(e.target.value)}
                className="w-full rounded-xl bg-void border border-tungsten px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                placeholder="50 BAGS"
              />
            </label>
            <label className="block">
              <span className="text-xs text-zinc-500 block mb-1">Spec 2</span>
              <input
                type="text"
                value={spec2}
                onChange={(e) => setSpec2(e.target.value)}
                className="w-full rounded-xl bg-void border border-tungsten px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                placeholder="R25/bag"
              />
            </label>
            <label className="block">
              <span className="text-xs text-zinc-500 block mb-1">Spec 3</span>
              <input
                type="text"
                value={spec3}
                onChange={(e) => setSpec3(e.target.value)}
                className="w-full rounded-xl bg-void border border-tungsten px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                placeholder="Free Delivery"
              />
            </label>
            <label className="block">
              <span className="text-xs text-zinc-500 block mb-1">Spec 4</span>
              <input
                type="text"
                value={spec4}
                onChange={(e) => setSpec4(e.target.value)}
                className="w-full rounded-xl bg-void border border-tungsten px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                placeholder="Gauteng Only"
              />
            </label>
          </div>

          <div className="rounded-3xl bg-titanium border border-tungsten p-5 space-y-4">
            <div className="flex items-center gap-2 text-zinc-400 text-sm uppercase tracking-widest-tech">
              <ImageIcon className="w-4 h-4" />
              Background
            </div>
            <label className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-tungsten py-3 px-4 cursor-pointer hover:bg-white/5 transition-colors">
              <Upload className="w-4 h-4 text-zinc-500" />
              <span className="text-sm text-zinc-400">Upload vertical image</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            <label className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-tungsten py-3 px-4 cursor-pointer hover:bg-white/5 transition-colors">
              <Upload className="w-4 h-4 text-zinc-500" />
              <span className="text-sm text-zinc-400">Upload square image</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUploadSquare}
                className="hidden"
              />
            </label>
            <label className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-tungsten py-3 px-4 cursor-pointer hover:bg-white/5 transition-colors">
              <Upload className="w-4 h-4 text-zinc-500" />
              <span className="text-sm text-zinc-400">Upload horizontal image</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUploadHorizontal}
                className="hidden"
              />
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setImageUrl(DEFAULT_IMAGE)}
                className="flex-1 text-xs text-zinc-500 hover:text-zinc-300"
              >
                Reset vertical
              </button>
              <button
                type="button"
                onClick={() => setImageUrlSquare(DEFAULT_IMAGE)}
                className="flex-1 text-xs text-zinc-500 hover:text-zinc-300"
              >
                Reset square
              </button>
              <button
                type="button"
                onClick={() => setImageUrlHorizontal(DEFAULT_IMAGE)}
                className="flex-1 text-xs text-zinc-500 hover:text-zinc-300"
              >
                Reset horizontal
              </button>
            </div>
            <div className="space-y-3 pt-2 border-t border-tungsten/50">
              <p className="text-xs text-zinc-500 uppercase tracking-widest-tech">Vertical image</p>
              <label className="block">
                <span className="text-xs text-zinc-500 block mb-1">Zoom</span>
                <input
                  type="range"
                  min={0.5}
                  max={2.5}
                  step={0.05}
                  value={imageZoomVertical}
                  onChange={(e) => setImageZoomVertical(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </label>
              <label className="block">
                <span className="text-xs text-zinc-500 block mb-1">Move up / down</span>
                <input
                  type="range"
                  min={-200}
                  max={200}
                  step={5}
                  value={imagePositionVertical}
                  onChange={(e) => setImagePositionVertical(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </label>
              <label className="block">
                <span className="text-xs text-zinc-500 block mb-1">Move left / right</span>
                <input
                  type="range"
                  min={-200}
                  max={200}
                  step={5}
                  value={imagePositionVerticalX}
                  onChange={(e) => setImagePositionVerticalX(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </label>
            </div>
            <div className="space-y-3 pt-2 border-t border-tungsten/50">
              <p className="text-xs text-zinc-500 uppercase tracking-widest-tech">Square image</p>
              <label className="block">
                <span className="text-xs text-zinc-500 block mb-1">Zoom</span>
                <input
                  type="range"
                  min={0.5}
                  max={2.5}
                  step={0.05}
                  value={imageZoomSquare}
                  onChange={(e) => setImageZoomSquare(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </label>
              <label className="block">
                <span className="text-xs text-zinc-500 block mb-1">Move up / down</span>
                <input
                  type="range"
                  min={-200}
                  max={200}
                  step={5}
                  value={imagePositionSquare}
                  onChange={(e) => setImagePositionSquare(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </label>
              <label className="block">
                <span className="text-xs text-zinc-500 block mb-1">Move left / right</span>
                <input
                  type="range"
                  min={-200}
                  max={200}
                  step={5}
                  value={imagePositionSquareX}
                  onChange={(e) => setImagePositionSquareX(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </label>
            </div>
            <div className="space-y-3 pt-2 border-t border-tungsten/50">
              <p className="text-xs text-zinc-500 uppercase tracking-widest-tech">Horizontal (1.91:1) image</p>
              <label className="block">
                <span className="text-xs text-zinc-500 block mb-1">Zoom</span>
                <input
                  type="range"
                  min={0.5}
                  max={2.5}
                  step={0.05}
                  value={imageZoomHorizontal}
                  onChange={(e) => setImageZoomHorizontal(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </label>
              <label className="block">
                <span className="text-xs text-zinc-500 block mb-1">Move left / right</span>
                <input
                  type="range"
                  min={-200}
                  max={200}
                  step={5}
                  value={imagePositionHorizontalX}
                  onChange={(e) => setImagePositionHorizontalX(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </label>
              <label className="block">
                <span className="text-xs text-zinc-500 block mb-1">Move up / down</span>
                <input
                  type="range"
                  min={-200}
                  max={200}
                  step={5}
                  value={imagePositionHorizontalY}
                  onChange={(e) => setImagePositionHorizontalY(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </label>
            </div>
          </div>

          <div className="rounded-3xl bg-titanium border border-tungsten p-5 space-y-3">
            <button
              type="button"
              onClick={handleExport}
              disabled={exporting}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#B87333] via-[#D4A574] to-[#6B3000] py-3 px-4 text-black font-semibold text-sm uppercase tracking-[0.2em] hover:opacity-95 disabled:opacity-60 transition-opacity"
            >
              <Download className="w-4 h-4" />
              {exporting ? "Creating…" : "Export vertical (1080×1920)"}
            </button>
            <button
              type="button"
              onClick={handleExportSquare}
              disabled={exportingSquare}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#B87333] via-[#D4A574] to-[#6B3000] py-3 px-4 text-black font-semibold text-sm uppercase tracking-[0.2em] hover:opacity-95 disabled:opacity-60 transition-opacity"
            >
              <Download className="w-4 h-4" />
              {exportingSquare ? "Creating…" : "Export square (1080×1080)"}
            </button>
            <button
              type="button"
              onClick={handleExport45}
              disabled={exporting45}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#B87333] via-[#D4A574] to-[#6B3000] py-3 px-4 text-black font-semibold text-sm uppercase tracking-[0.2em] hover:opacity-95 disabled:opacity-60 transition-opacity"
            >
              <Download className="w-4 h-4" />
              {exporting45 ? "Creating…" : "Export 4:5 (1080×1350)"}
            </button>
            <button
              type="button"
              onClick={handleExportHorizontal}
              disabled={exportingHorizontal}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#B87333] via-[#D4A574] to-[#6B3000] py-3 px-4 text-black font-semibold text-sm uppercase tracking-[0.2em] hover:opacity-95 disabled:opacity-60 transition-opacity"
            >
              <Download className="w-4 h-4" />
              {exportingHorizontal ? "Creating…" : "Export horizontal (1200×628)"}
            </button>
          </div>
        </aside>

        {/* Right: Canvases */}
        <main className="flex-1 flex flex-wrap items-start justify-center gap-6 min-h-0 lg:min-h-[calc(100vh-12rem)]">
          <div className="flex flex-col items-center gap-2 shrink-0">
            <span className="text-xs text-zinc-500 uppercase tracking-widest-tech">
              Vertical (1080×1920)
            </span>
            <div
              className="overflow-hidden rounded-3xl border border-tungsten shadow-2xl shrink-0"
              style={{ width: 450, height: 800, minWidth: 450, minHeight: 800 }}
            >
              <AdCanvas
                ref={canvasRef}
                variant="vertical"
                title={title}
                subheading={subheading}
                spec1={spec1}
                spec2={spec2}
                spec3={spec3}
                spec4={spec4}
                footerLine={footerLine}
                neighborhoodLine={neighborhoodLine}
                phone={phone}
                phone2={phone2}
                imageUrl={imageUrl}
                imageZoom={imageZoomVertical}
                imagePositionY={imagePositionVertical}
                imagePositionX={imagePositionVerticalX}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 shrink-0">
            <span className="text-xs text-zinc-500 uppercase tracking-widest-tech">
              Square (1080×1080)
            </span>
            <div
              className="overflow-hidden rounded-3xl border border-tungsten shadow-2xl shrink-0"
              style={{ width: 450, height: 450, minWidth: 450, minHeight: 450 }}
            >
              <AdCanvas
                ref={canvasRefSquare}
                variant="square"
                title={title}
                subheading={subheading}
                spec1={spec1}
                spec2={spec2}
                spec3={spec3}
                spec4={spec4}
                footerLine={footerLine}
                neighborhoodLine={neighborhoodLine}
                phone={phone}
                phone2={phone2}
                imageUrl={imageUrlSquare}
                imageZoom={imageZoomSquare}
                imagePositionY={imagePositionSquare}
                imagePositionX={imagePositionSquareX}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 shrink-0">
            <span className="text-xs text-zinc-500 uppercase tracking-widest-tech">
              4:5 (1080×1350)
            </span>
            <div
              className="overflow-hidden rounded-3xl border border-tungsten shadow-2xl shrink-0"
              style={{ width: 360, height: 450, minWidth: 360, minHeight: 450 }}
            >
              <AdCanvas
                ref={canvasRef45}
                variant="vertical45"
                title={title}
                subheading={subheading}
                spec1={spec1}
                spec2={spec2}
                spec3={spec3}
                spec4={spec4}
                footerLine={footerLine}
                neighborhoodLine={neighborhoodLine}
                phone={phone}
                phone2={phone2}
                imageUrl={imageUrl}
                imageZoom={imageZoomVertical}
                imagePositionY={imagePositionVertical}
                imagePositionX={imagePositionVerticalX}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 shrink-0">
            <span className="text-xs text-zinc-500 uppercase tracking-widest-tech">
              Horizontal 1.91:1 (1200×628)
            </span>
            <div
              className="overflow-hidden rounded-3xl border border-tungsten shadow-2xl shrink-0"
              style={{ width: 600, height: 314, minWidth: 600, minHeight: 314 }}
            >
              <AdCanvas
                ref={canvasRefHorizontal}
                variant="horizontal"
                title={title}
                subheading={subheading}
                spec1={spec1}
                spec2={spec2}
                spec3={spec3}
                spec4={spec4}
                footerLine={footerLine}
                neighborhoodLine={neighborhoodLine}
                phone={phone}
                phone2={phone2}
                imageUrl={imageUrlHorizontal}
                imageZoom={imageZoomHorizontal}
                imagePositionY={imagePositionHorizontalY}
                imagePositionX={imagePositionHorizontalX}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
