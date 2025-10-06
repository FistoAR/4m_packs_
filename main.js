// Data structure for different categories and their models
const categories = [
  {
    name: "ROUND CONTAINER",
    models: [
      {
        name: "4MP-HC-50",
        capacity: "50ml Hinged Container",
        src: "./assets/glb/round/50ml_hinged_container.glb",
        img: "./container_images/50 hinged container n.webp",
        type: "round",
      },
      {
        name: "4MP-R-120",
        capacity: "120ml Round Container",
        src: "./assets/glb/round/120ml_round.glb",
        img: "./container_images/120 hinged container n.webp",
        type: "round",
      },
      {
        name: "4MP-R-250",
        capacity: "250ml Round Container",
        src: "./assets/glb/round/250ml_round.glb",
        img: "./container_images/250ml n1.webp",
        type: "round",
      },
      {
        name: "4MP-R-500",
        capacity: "500ml Round Container",
        src: "./assets/glb/round/500ml_round.glb",
        img: "./container_images/4.500ml container.webp",
        type: "round",
      },
      {
        name: "4MP-R-750",
        capacity: "750ml Round Container",
        src: "./assets/glb/round/750ml_round.glb",
        img: "./container_images/5.750ml container n2.webp",
        type: "round",
      },
    ],
  },
  {
    name: "TAMPER EVIDENT RECTANGULAR CONTAINER",
    models: [
      {
        name: "4MP-TER-500",
        capacity: "500ml Tamper Evident Rectangular Container",
        src: "./assets/glb/rectangle/500_rectangle.glb",
        img: "./container_images/6 - 500ml Tamper Evident Rectangular Container.webp",
        type: "rectangle",
      },
      {
        name: "4MP-TER-750",
        capacity: "750ml Tamper Evident Rectangular Container",
        src: "./assets/glb/rectangle/750_rectangle.glb",
        img: "./container_images/7 - 750ml Tamper Evident Rectangular Container.webp",
        type: "rectangle",
      },
      {
        name: "4MP-TER-1000",
        capacity: "1000ml Tamper Evident Rectangular Container",
        src: "./assets/glb/rectangle/1000_rectangle.glb",
        img: "./container_images/8 - 1000ml Tamper Evident Rectangular Container.webp",
        type: "rectangle",
      },
    ],
  },
  {
    name: "SIPPER GLASS",
    models: [
      {
        name: "4MP-DC-120",
        capacity: "120ml  Dessert cup",
        src: "./Model/120ml_dessert_cup.glb",
        img: "./container_images/sipper_models/120_dessert_cup.webp",
        type: "sipper",
      },
      {
        name: "4MP-G-250",
        capacity: "250ml Glass",
        src: "./Model/250ml_glass.glb",
        img: "./container_images/sipper_models/250ml_glass.webp",
        type: "sipper",
      },
      {
        name: "4MP-SG-250",
        capacity: "250ml Sipper glass",
        src: "./Model/250_Sipper_glass.glb",
        img: "./container_images/sipper_models/250ml_sipper_glass.webp",
        type: "sipper",
      },
      {
        name: "4MP-GF-250",
        capacity: "250ml Glass with flat lid",
        src: "./Model/250_glasswith_flat_lid.glb",
        img: "./container_images/sipper_models/250ml_glass_with_flat_lid.webp",
        type: "sipper",
      },
      {
        name: "4MP-G-350",
        capacity: "350ml Glass",
        src: "./Model/350ml_glass.glb",
        img: "./container_images/sipper_models/350ml_glass.webp",
        type: "sipper",
      },
      {
        name: "4MP-SG-350",
        capacity: "350ml Sipper glass",
        src: "./Model/350_sipper_glass.glb",
        img: "./container_images/sipper_models/350ml_sipper_glass.webp",
        type: "sipper",
      },
    ],
  },
];

let currentCategory = 0;
let selectedModel = 0;
let selectedPattern = 0;
let zoomLevel = 1;

// Initialize the page
function init() {
  loadModels();
  selectModel(0);
  selectPattern(0);
}

// Load models for current category
// function loadModels() {
//     const modelGrid = document.getElementById('modelGrid');
//     modelGrid.innerHTML = '';

//     categories[currentCategory].models.forEach((model, index) => {
//         const modelElement = document.createElement('div');
//         modelElement.className = `model-item ${index === selectedModel ? 'selected' : ''}`;
//         modelElement.onclick = () => selectModel(index);

//         modelElement.innerHTML = `
//         <div class="section-title">${name}</div>
//             <div class="model-preview"></div>

//             <div class="model-specs">${model.capacity}</div>
//         `;

//         modelGrid.appendChild(modelElement);
//     });
// }
function loadModels() {
  const modelGrid = document.getElementById("modelGrid");
  const categoryTitle = document.getElementById("categoryTitle");

  // Change heading dynamically
  categoryTitle.textContent = categories[currentCategory].name;

  // Clear previous models
  modelGrid.innerHTML = "";

  categories[currentCategory].models.forEach((model, index) => {
    const modelElement = document.createElement("div");
    modelElement.className = `model-item ${index === selectedModel ? "selected" : ""
      }`;
    modelElement.onclick = () => selectModel(index);

    modelElement.innerHTML = `
            <div class="model-preview">
                <img src="${model.img}"/>
                </div>
            
            <div class="model-specs">${model.capacity}</div>
        `;

    modelGrid.appendChild(modelElement);
  });
}

// Select category
function selectCategory(categoryIndex) {
  currentCategory = categoryIndex;
  selectedModel = 0;

  // Update active button
  document.querySelectorAll(".nav-btn").forEach((btn, index) => {
    btn.classList.toggle("active", index === categoryIndex);
  });

  loadModels();
  selectModel(0);
}

// Select model
function selectModel(modelIndex) {
  selectedModel = modelIndex;
  const model = categories[currentCategory].models[modelIndex];

  // Update selected model in grid
  document.querySelectorAll(".model-item").forEach((item, index) => {
    item.classList.toggle("selected", index === modelIndex);
  });

  // Update model display
  document.getElementById("modelTitle").textContent = model.name;
  document.getElementById("modelCapacity").textContent = model.capacity;

  // Update model viewer (placeholder for actual GLB loading)
  const placeholder = document.getElementById("modelPlaceholder");
  placeholder.innerHTML = `<model-viewer src="${model.src}" alt="${model.name}" auto-rotate camera-controls style="width: 100%; height: 100%;" id="viewer" disable-tap disable-pan></model-viewer>`;
}

// Select pattern
function selectPattern(patternIndex) {
  selectedPattern = patternIndex;

  // Update selected pattern
  document.querySelectorAll(".pattern-item").forEach((item, index) => {
    item.classList.toggle("selected", index === patternIndex);
  });

  // Apply pattern to current model (this would typically update the GLB texture)
  console.log(
    `Applied pattern ${patternIndex} to model ${categories[currentCategory].models[selectedModel].name}`
  );
}

// Zoom functions
function zoomIn() {
  zoomLevel = Math.min(zoomLevel + 0.2, 3);
  updateZoom();
}

function zoomOut() {
  zoomLevel = Math.max(zoomLevel - 0.2, 0.5);
  updateZoom();
}

function updateZoom() {
  const modelViewer = document.querySelector("model-viewer");
  if (modelViewer) {
    modelViewer.style.transform = `scale(${zoomLevel})`;
  }
}

// Export functions
function toggleDropdown() {
  document.getElementById("exportDropdown").classList.toggle("show");
}

function exportModel(format) {
  // Create download link
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 600;

  // Fill with white background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add model name as text (placeholder)
  ctx.fillStyle = "black";
  ctx.font = "24px Arial";
  ctx.textAlign = "center";
  ctx.fillText(
    categories[currentCategory].models[selectedModel].name,
    canvas.width / 2,
    canvas.height / 2
  );

  // Convert to desired format and download
  const link = document.createElement("a");
  if (format === "svg") {
    // Create SVG content
    const svgContent = `
                    <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                        <rect width="800" height="600" fill="white"/>
                        <text x="400" y="300" text-anchor="middle" font-family="Arial" font-size="24">${categories[currentCategory].models[selectedModel].name}</text>
                    </svg>
                `;
    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    link.href = URL.createObjectURL(blob);
  } else {
    canvas.toBlob(function (blob) {
      link.href = URL.createObjectURL(blob);
      link.download = `${categories[currentCategory].models[selectedModel].name}.${format}`;
      link.click();
    }, `image/${format}`);
    return;
  }

  link.download = `${categories[currentCategory].models[selectedModel].name}.${format}`;
  link.click();

  document.getElementById("exportDropdown").classList.remove("show");
}

// Edit function
// function editModel() {
//     window.location.href = 'index.html', '_blank';
// }
function editModel() {
  let selectCategoryFinal;
  if (currentCategory == 0) {
    selectCategoryFinal = "round";
  } else if (currentCategory == 1) {
    selectCategoryFinal = "rectangle";
  } else {
    selectCategoryFinal = "round";
  }
  sessionStorage.setItem("model_type", selectCategoryFinal);
  window.open("edit.html", "_blank");
}

window.addEventListener("message", (event) => {
  // Optional: verify origin for security
  // if (event.origin !== "https://yourdomain.com") return;

  const dataURL = event.data;

  if (typeof dataURL === "string" && dataURL.startsWith("data:image/png")) {
    console.log("Received PNG image from editor");
    console.log(`Here is the image url: \n ${dataURL}`);

    // Now use this dataURL as texture for your GLB model
    // Example: apply it as texture
    applyTextureBase64(dataURL);
  }
});

async function applyTextureBase64(base64Image) {
  // Wait until the model is loaded
  // await modelViewer.whenLoaded();

  // Get all materials of the model
  const modelViewer = document.getElementById("viewer");
  const materials = modelViewer.model.materials;

  // Find the material named "texture_area" (case-insensitive search)
  const labelMat = materials.find(m => m.name.toLowerCase().includes("texture_area"));

  if (!labelMat) {
    console.warn("⚠ No 'texture_area' material found");
    return;
  }

  console.log("Applying pattern:", base64Image);

  // Use model-viewer's built-in texture loader
  const tex = await modelViewer.createTexture(base64Image);

  // Apply the texture to the material's baseColorTexture
  labelMat.pbrMetallicRoughness.baseColorTexture.setTexture(tex);

  // Force a refresh for the changes to take effect
  modelViewer.requestUpdate();
}


// GLB Import function
function handleGLBImport(event) {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    console.log(`Imported GLB file: ${file.name}`);
    // Here you would typically process the GLB file and add it to the models array
  }
}

// Pattern Import function
function handlePatternImport(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      console.log(`Imported pattern: ${file.name}`);
      // Here you would typically create a new pattern from the imported image
    };
    reader.readAsDataURL(file);
  }
}

// Close dropdown when clicking outside
window.onclick = function (event) {
  if (!event.target.matches(".export-btn")) {
    const dropdown = document.getElementById("exportDropdown");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  }
};

// Initialize when page loads
window.addEventListener("DOMContentLoaded", init);

// Add this function to your existing JavaScript code
function togglePatternsSection() {
  const patternsSection = document.querySelector(".patterns-section");

  // Hide patterns section only when Sipper Glass (category 2) is active
  if (currentCategory === 2) {
    patternsSection.style.display = "none";
  } else {
    patternsSection.style.display = "block";
  }
}

// Update your existing selectCategory function
function selectCategory(categoryIndex) {
  currentCategory = categoryIndex;
  selectedModel = 0;

  // Update active button
  document.querySelectorAll(".nav-btn").forEach((btn, index) => {
    btn.classList.toggle("active", index === categoryIndex);
  });

  loadModels();
  selectModel(0);

  // Add this line to toggle patterns section visibility
  togglePatternsSection();
}

// Update your existing init function
function init() {
  loadModels();
  selectModel(0);
  selectPattern(0);

  // Add this line to set initial state
  togglePatternsSection();
}

// Add this function to toggle the model grid layout
function toggleModelGridLayout() {
  const modelGrid = document.getElementById("modelGrid");
  const modelItems = document.querySelectorAll(".model-item"); // Use querySelectorAll, not getElementById

  // Remove grid display for Tamper Evident (category 1), keep grid for others
  if (currentCategory === 1) {
    modelGrid.style.display = "flex";
    modelGrid.style.flexDirection = "column";
    modelGrid.style.gap = "15px";

    // Apply styles to all model items
    modelItems.forEach((item) => {
      item.style.display = "flex";
      item.style.flexDirection = "row";
      item.style.marginRight = "auto";
      item.style.marginLeft = "auto";
      // item.style.width = '100%';
      item.style.height = "auto";
    });
  } else {
    modelGrid.style.display = "grid";
    modelGrid.style.gridTemplateColumns = "1fr 1fr";
    modelGrid.style.gap = "8px";

    // Reset model items to default
    modelItems.forEach((item) => {
      item.style.display = "flex";
      item.style.flexDirection = "column";
      item.style.width = "80%";
      item.style.height = "135px";
    });
  }
}

// Update your existing selectCategory function
function selectCategory(categoryIndex) {
  currentCategory = categoryIndex;
  selectedModel = 0;

  // Update active button
  document.querySelectorAll(".nav-btn").forEach((btn, index) => {
    btn.classList.toggle("active", index === categoryIndex);
  });

  loadModels();
  selectModel(0);

  // Add this line to toggle patterns section visibility
  togglePatternsSection();

  // Add this line to toggle model grid layout
  toggleModelGridLayout();
}

// Update your existing init function
function init() {
  loadModels();
  selectModel(0);
  selectPattern(0);

  // Add this line to set initial state
  togglePatternsSection();

  // Add this line to set initial grid layout
  toggleModelGridLayout();
}

async function downloadGLB() {
   const modelViewer = document.querySelector("model-viewer");
const glTF = await modelViewer.exportScene();
  const file = new File([glTF], "export_model.glb");
  const link = document.createElement("a");
  link.download = file.name;
  link.href = URL.createObjectURL(file);
  link.click();
}


async function captureScreenshot() {
  const modelViewer = document.querySelector("model-viewer");
  const canvas = await html2canvas(modelViewer); // html2canvas captures the element
  return canvas.toDataURL("image/png"); // return a data URL
}

async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const model = categories[currentCategory].models[selectedModel];
  const modelViewer = document.querySelector("model-viewer");

  // Store original size
  const originalWidth = modelViewer.style.width;
  const originalHeight = modelViewer.style.height;

  // Temporarily increase resolution
  modelViewer.style.width = "1920px";
  modelViewer.style.height = "1080px";

  modelViewer.requestUpdate();
  await modelViewer.updateComplete;

  // Wait a moment for re-render
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Capture high-res image
  const imgData = modelViewer.toDataURL("image/png");

  // Restore original size
  modelViewer.style.width = originalWidth;
  modelViewer.style.height = originalHeight;

  // Create PDF
  const pdf = new jsPDF("landscape", "pt", "a4");
  pdf.text(model.name, 40, 40);

  const pdfWidth = pdf.internal.pageSize.getWidth() - 80;
  const pdfHeight = pdf.internal.pageSize.getHeight() - 100;

  pdf.addImage(imgData, "PNG", 40, 60, pdfWidth, pdfHeight);
  pdf.save(model.name + ".pdf");
}




// Pattern texture URLs
const patternTextures = [
  "./50-ml/50ml-G.png",
  "./50-ml/50ml-R.png",
  "./50-ml/50ml-Y.png",
];

// let currentPatternTexture = patternTextures[0];

// Updated selectPattern function
function selectPattern(patternIndex) {
  selectedPattern = patternIndex;
  currentPatternTexture = patternTextures[patternIndex];

  // Update selected pattern in UI
  document.querySelectorAll(".pattern-item").forEach((item, index) => {
    item.classList.toggle("selected", index === patternIndex);
  });

  // Apply pattern texture to the 3D model
  applyPatternToModel();

  console.log(`Selected pattern ${patternIndex}`);
}

// Function to apply pattern texture to the model
// Function to apply pattern texture to the model
async function applyPatternToModel() {
  const modelViewer = document.querySelector("model-viewer");
  if (!modelViewer) return;
  console.log("Current pattern texture: ", currentPatternTexture);
  if (currentPatternTexture == null || currentPatternTexture == undefined) {return;}

  // await modelViewer.model.updateComplete;

  const materials = modelViewer.model.materials;

  // Find your label material
  const labelMat = materials.find((m) =>
    m.name.toLowerCase().includes("texture_area")
  );
  if (!labelMat) {
    console.warn("⚠ No 'label' material found");
    return;
  }

  console.log("Applying pattern:", currentPatternTexture);

  // Use model-viewer's built-in texture loader
  const tex = await modelViewer.createTexture(currentPatternTexture);

  // Apply texture safely
  labelMat.pbrMetallicRoughness.baseColorTexture.setTexture(tex);

  // Force refresh
  modelViewer.requestUpdate();
}

async function applyNoFill() {
   const modelViewer = document.querySelector("model-viewer");
  if (!modelViewer) return;

  // Wait for model to be fully loaded
  // await modelViewer.model?.updateComplete;

  const materials = modelViewer.model.materials;

  // Find the label material
  const labelMat = materials.find((m) =>
    m.name.toLowerCase().includes("texture_area")
  );

  if (!labelMat) {
    console.warn("⚠ No 'label' material found");
    return;
  }

  labelMat.pbrMetallicRoughness.baseColorTexture.setTexture(null);

  labelMat.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 0]); // RGBA: white + 0 alpha

  labelMat.alphaMode = 'BLEND';
  
  const labelUnderMat = materials.find((m) =>
    m.name.toLowerCase().includes("texture_under")
  );

  console.log("All material names:");
materials.forEach(m => console.log(m.name));


  if (!labelUnderMat) {
    console.warn("⚠ No 'texture_under' material found");
    return;
  }

  labelUnderMat.pbrMetallicRoughness.baseColorTexture.setTexture(null);

  labelUnderMat.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 0]); // RGBA: white + 0 alpha

  labelUnderMat.alphaMode = 'BLEND';

  console.log("No fill is applied to the texture under material");

  // Force model-viewer to re-render
  modelViewer.requestUpdate();

}

// Function to apply texture to a specific mesh
function applyTextureToMesh(mesh) {
  const modelViewer = document.querySelector("model-viewer");

  if (!mesh.material) {
    console.error("Mesh has no material");
    return;
  }

  // Clone material to avoid affecting other meshes
  mesh.material = mesh.material.clone();

  console.log("Loading texture:", currentPatternTexture);

  // Load the image
  const img = new Image();
  img.crossOrigin = "anonymous";

  img.onload = function () {
    console.log("✓ Texture image loaded");

    try {
      // Create a canvas texture
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Access Three.js through model-viewer's internal scene
      const scene = modelViewer.model;
      const THREE = scene.constructor;

      // Create Three.js texture
      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      texture.wrapS = 1000; // RepeatWrapping
      texture.wrapT = 1000; // RepeatWrapping

      // Apply to material
      mesh.material.map = texture;
      mesh.material.needsUpdate = true;

      console.log("✓ Texture applied successfully!");

      // Force render update
      modelViewer.requestUpdate();
    } catch (error) {
      console.error("Error creating texture:", error);
    }
  };

  img.onerror = function () {
    console.error("Failed to load texture image:", currentPatternTexture);
  };

  img.src = currentPatternTexture;
}

// Updated selectModel function - REPLACE your existing one
function selectModel(modelIndex) {
  selectedModel = modelIndex;
  
  const model = categories[currentCategory].models[modelIndex];
  
  let camera_orbit = '';
  if (model.type == "round" && modelIndex == 0) {
    camera_orbit = `camera-orbit="-1263deg 53.54deg 0.1261m"`;
  }
  else if (model.type == "rectangle" && modelIndex == 0) {
    camera_orbit = `camera-orbit="-1443deg 53.14deg 0.4303m"`;
  }
  else if (model.type == "sipper" && modelIndex == 0) {
    camera_orbit = `camera-orbit="-1619deg 74.82deg 0.2274m"`;
  }
  else {
    camera_orbit = ''
  }

  // Update selected model in grid
  document.querySelectorAll(".model-item").forEach((item, index) => {
    item.classList.toggle("selected", index === modelIndex);
  });

  // Update model display
  document.getElementById("modelTitle").textContent = model.name;
  document.getElementById("modelCapacity").textContent = model.capacity;

  // Update model viewer
  const placeholder = document.getElementById("modelPlaceholder");
  placeholder.innerHTML = `<model-viewer 
        src="${model.src}" 
        alt="${model.name}" 
        auto-rotate 
        camera-controls 
        style="width: 100%; height: 100%;"
        id="viewer" disable-tap disable-pan
        ${camera_orbit}
        >
    </model-viewer>`;

  // Wait for model-viewer to be created, then apply pattern
  setTimeout(() => {
    const newModelViewer = document.querySelector("model-viewer");
    if (newModelViewer) {
      newModelViewer.addEventListener(
        "load",
        () => {
          console.log("New model loaded, applying pattern...");
          applyPatternToModel();
        },
        { once: true }
      );
    }
  }, 100);
}

// Custom pattern upload handler
function handlePatternImport(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageUrl = e.target.result;

      // Add to pattern textures array
      patternTextures.push(imageUrl);

      // Create new pattern item in UI
      const patternGrid = document.querySelector(".pattern-grid");
      const newPattern = document.createElement("div");
      newPattern.className = "pattern-item";
      newPattern.style.background = `url(${imageUrl})`;
      newPattern.style.backgroundSize = "cover";
      newPattern.onclick = () => selectPattern(patternTextures.length - 1);
      patternGrid.appendChild(newPattern);

      // Automatically select and apply the new pattern
      selectPattern(patternTextures.length - 1);

      console.log(`Imported and applied pattern: ${file.name}`);
    };
    reader.readAsDataURL(file);
  }
}

// Initialize - call this after DOMContentLoaded or at the end of init()
function initPatternSystem() {
  console.log("Pattern system initialized");

  // Apply initial pattern after model loads
  setTimeout(() => {
    applyPatternToModel();
  }, 1500);
}

// Pattern texture configurations for different categories
const patternConfigs = {
  0: {
    // Round Container
    textures: [
      "./assets/images/pattern_images/round_green.png",
      "./assets/images/pattern_images/round_brown.png",
      "./assets/images/pattern_images/round_mix.png",
    ],
  },
  1: {
    // Tamper Evident Rectangular
    textures: [
      "./assets/images/pattern_images/rectangle_green.png",
      "./assets/images/pattern_images/rectangle_brown.png",
      "./assets/images/pattern_images/rectangle_mix.png",
    ],
  },
  2: {
    // Sipper Glass (no patterns)
    textures: [],
  },
};

// Update pattern textures array to use current category
let currentPatternTexture = patternConfigs[0].textures[0];

// New function to update pattern grid based on category
// New function to update pattern grid based on category
function updatePatternGrid() {
  const patternGrid = document.querySelector(".pattern-grid");
  const currentPatterns = patternConfigs[currentCategory].textures;
  const customizeButton = document.getElementById('editCustomiseButton');

  // Clear existing patterns
  patternGrid.innerHTML = "";

  const noFillImage = (currentCategory === 0) ? 'no_fill_circle.png' : 'no_fill_rectangle.png';
  (currentCategory === 2) ? customizeButton.style.display = 'none' : customizeButton.style.display = 'unset';
  // Add patterns for current category
  currentPatterns.forEach((textureUrl, index) => {
    const patternItem = document.createElement("div");
    patternItem.className = `pattern-item ${index === 0 ? "selected" : ""}`;
    patternItem.style.background = `white url(${textureUrl})`;
    patternItem.style.backgroundSize = "cover";
    patternItem.style.backgroundRepeat = "repeat";

    // Apply custom size only for Tamper Evident Rectangular (category 1)
    if (currentCategory === 1) {
      patternItem.style.width = "85px";
      patternItem.style.height = "55px";
    }


    patternItem.onclick = () => selectPattern(index);

    patternGrid.appendChild(patternItem);
  });

  // Reset to first pattern of the category
  if (currentPatterns.length > 0) {
    selectedPattern = 0;
    currentPatternTexture = currentPatterns[0];
  }

  const plainPattern = document.createElement("div");
  plainPattern.className = `pattern-item`;
  plainPattern.style.background = `white url(./assets/images/pattern_images/${noFillImage})`;
  plainPattern.style.backgroundSize = "cover";
  plainPattern.style.backgroundRepeat = "repeat";

   if (currentCategory === 1) {
    plainPattern.style.width = "85px";
    plainPattern.style.height = "55px";
  }
  const plainIndex = currentPatterns.length;


  plainPattern.onclick = () => {
    selectPattern(plainIndex);
    setModelPlain();
  }
  patternGrid.appendChild(plainPattern);

}

function setModelPlain() {
  console.log("Making the model plain");
  applyNoFill();
}

// Modified selectPattern function
function selectPattern(patternIndex) {
  selectedPattern = patternIndex;
  const currentPatterns = patternConfigs[currentCategory].textures;

  if (currentPatterns.length === 0) return; // No patterns for this category

  currentPatternTexture = currentPatterns[patternIndex];

  // Update selected pattern in UI
  document.querySelectorAll(".pattern-item").forEach((item, index) => {
    item.classList.toggle("selected", index === patternIndex);
  });

  // Apply pattern texture to the 3D model
  applyPatternToModel();

  console.log(
    `Selected pattern ${patternIndex} for category ${currentCategory}`
  );
}

// Update your existing selectCategory function to include pattern grid update
function selectCategory(categoryIndex) {
  currentCategory = categoryIndex;
  selectedModel = 0;

  // Update active button
  document.querySelectorAll(".nav-btn").forEach((btn, index) => {
    btn.classList.toggle("active", index === categoryIndex);
  });

  loadModels();
  selectModel(0);

  // Update pattern grid for new category
  updatePatternGrid();

  // Toggle patterns section visibility
  togglePatternsSection();

  // Toggle model grid layout
  toggleModelGridLayout();
}

// Update your existing init function
function init() {
  loadModels();
  selectModel(0);

  // Initialize pattern grid
  updatePatternGrid();

  // Set initial state
  togglePatternsSection();
  toggleModelGridLayout();
}

// upload logo function

const uploadButton = document.getElementById('uploadLogoButton');
const fileInput = document.getElementById('logoFileInput');
const modelViewerMain = document.querySelector("model-viewer");

// Trigger file picker when button is clicked
uploadButton.addEventListener('click', () => {
  fileInput.click();
});

// When file is selected
fileInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  // Create a URL for the uploaded file
  const imageURL = URL.createObjectURL(file);

  // Create an image element
  const img = new Image();

  // Wait for the image to load before applying
  img.onload = () => {
    applyLogo(img);

    // Release the object URL after use to free memory
    URL.revokeObjectURL(imageURL);
  };

  img.onerror = () => {
    console.error("Failed to load image");
    URL.revokeObjectURL(imageURL);
  };

  // Set the image source to trigger loading
  img.src = imageURL;
});

async function applyLogo(logoImage) {
  const modelViewer = document.querySelector("model-viewer");
  if (!modelViewer) return;

  const size = 512;
const canvas = document.createElement("canvas");
canvas.width = size;
canvas.height = size;
const ctx = canvas.getContext("2d");

// Optional: clear or fill background
ctx.clearRect(0, 0, size, size);
// ctx.fillStyle = "white"; // or any background color
// ctx.fillRect(0, 0, size, size);

// Calculate scaled dimensions preserving aspect ratio
const imgWidth = logoImage.width;
const imgHeight = logoImage.height;

let drawWidth, drawHeight;

if (imgWidth > imgHeight) {
  drawWidth = size;
  drawHeight = (imgHeight / imgWidth) * size;
} else {
  drawHeight = size;
  drawWidth = (imgWidth / imgHeight) * size;
}

// Center the image on the canvas
const offsetX = (size - drawWidth) / 2;
const offsetY = (size - drawHeight) / 2;

ctx.drawImage(logoImage, offsetX, offsetY, drawWidth, drawHeight);

  // Convert canvas to data URL instead of passing canvas directly
  const dataURL = canvas.toDataURL();

  const tex = await modelViewer.createTexture(dataURL);

  const materials = modelViewer.model.materials;

  const lid_logo = materials.find((m) =>
    m.name.toLowerCase().includes("lid_logo")
  );
  if (!lid_logo) {
    console.warn("⚠ No 'lid_logo' material found");
    return;
  }
  lid_logo.pbrMetallicRoughness.baseColorTexture.setTexture(tex);

  const bottom_logo = materials.find((m) =>
    m.name.toLowerCase().includes("bottom_logo")
  );
  if (!bottom_logo) {
    console.warn("⚠ No 'bottom_logo' material found");
    return;
  }
  bottom_logo.pbrMetallicRoughness.baseColorTexture.setTexture(tex);

  modelViewer.requestUpdate();
}